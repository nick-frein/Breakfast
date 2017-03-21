/**
 * Created by Hans Dulimarta on 1/31/17.
 */

var gl;
var glCanvas, textOut;
var orthoProjMat, persProjMat, viewMat, topViewMat, ringCF, foodCF, toastCF, toasterCF, rotCF, sideViewMat;
var axisBuff, tmpMat;
var globalAxes;

/* Vertex shader attribute variables */
var posAttr, colAttr;

/* Shader uniform variables */
var projUnif, viewUnif, modelUnif;

const IDENTITY = mat4.create();
var spinAngle, spinAngle2, moveTo, moveTo2;
var toggle;
var obj;
var shaderProg;
var currentObj = 0;
var inc = 0.1;
var timer = 0;
var currentAxis = 10;  // x=10  y=11  z=12

function main() {
    glCanvas = document.getElementById("gl-canvas");
    textOut = document.getElementById("msg");
    gl = WebGLUtils.setupWebGL(glCanvas, null);
    axisBuff = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, axisBuff);
    window.addEventListener("resize", resizeHandler, false);
    window.addEventListener("keypress", keyboardHandler, false);

    document.getElementById("objselector").addEventListener('change', ev => {
        currentObj = ev.currentTarget.value;
    });

    document.getElementById("axisselector").addEventListener('change', ev => {
        currentAxis = ev.currentTarget.value;
    });


    ShaderUtils.loadFromFile(gl, "vshader.glsl", "fshader.glsl")
        .then (prog => {
            shaderProg = prog;
            gl.useProgram(prog);
            gl.clearColor(0, 0, 0, 1);
            gl.enable(gl.DEPTH_TEST);    /* enable hidden surface removal */
            gl.enable(gl.CULL_FACE);     /* cull back facing polygons */
            gl.cullFace(gl.BACK);
            posAttr = gl.getAttribLocation(prog, "vertexPos");
            colAttr = gl.getAttribLocation(prog, "vertexCol");
            projUnif = gl.getUniformLocation(prog, "projection");
            viewUnif = gl.getUniformLocation(prog, "view");
            modelUnif = gl.getUniformLocation(prog, "modelCF");
            gl.enableVertexAttribArray(posAttr);
            gl.enableVertexAttribArray(colAttr);
            orthoProjMat = mat4.create();
            persProjMat = mat4.create();
            viewMat = mat4.create();
            topViewMat = mat4.create();
            sideViewMat = mat4.create();
            ringCF = mat4.create();
            toastCF = mat4.create();
            toasterCF = mat4.create();
            chairCF = mat4.create();
            rotCF = mat4.create();
            tmpMat = mat4.create();
            //tmpMat2 = mat4.create();
            mat4.lookAt(viewMat,
                vec3.fromValues(10, -3, 2), /* eye */
                vec3.fromValues(0, 0, 0), /* focal point */
                vec3.fromValues(0, 0, 1)); /* up */
            /*mat4.lookAt(topViewMat,
                vec3.fromValues(0,0,2),
                vec3.fromValues(0,0,0),
                vec3.fromValues(0,1,0)
            );*/
            /*mat4.lookAt(topViewMat,
                vec3.fromValues(0,0,2),
                vec3.fromValues(0,0,0),
                vec3.fromValues(0,1,0));*/
            /*mat4.lookAt(sideViewMat,
                vec3.fromValues(6, -5, 2),
                vec3.fromValues(3, -2, 0),
                vec3.fromValues(0, 0, 1)
            );*/
           /* mat4.lookAt(sideViewMat,
                vec3.fromValues(0, -7, 0),
                vec3.fromValues(3, 0, 0),
                vec3.fromValues(0, 0, 1)
            );*/
            gl.uniformMatrix4fv(modelUnif, false, ringCF);

            obj = new food(gl);
            objChair = new chair(gl);
            objFloor = new floor(gl);
            objTable = new table(gl);
            objBread = new bread(gl);
            objToaster = new toaster(gl);
            //obj = new DiamondRing(gl);
            globalAxes = new Axes(gl);
            //mat4.rotateX(ringCF, ringCF, -Math.PI/2);
            toggle = 0;
            spinAngle = 0;
            spinAngle2 = 6;
            moveTo = 0;
            moveTo2 = 0;

            resizeHandler();
            render();
        });
}

function resizeHandler() {
    glCanvas.width = window.innerWidth;
    glCanvas.height = 0.9 * window.innerHeight;
    if (glCanvas.width > glCanvas.height) { /* landscape */
        let ratio = 2 * glCanvas.height / glCanvas.width;
        console.log("Landscape mode, ratio is " + ratio);
        mat4.ortho(orthoProjMat, -3, 3, -3 * ratio, 3 * ratio, -5, 5);
        mat4.perspective(persProjMat,
            Math.PI/3,  /* 60 degrees vertical field of view */
            1/ratio,    /* must be width/height ratio */
            1,          /* near plane at Z=1 */
            20);        /* far plane at Z=20 */
    } else {
        alert ("Window is too narrow!");
    }

}

function keyboardHandler(event) {
    const transXpos = mat4.fromTranslation(mat4.create(), vec3.fromValues( 0.5, 0, 0));
    const transXneg = mat4.fromTranslation(mat4.create(), vec3.fromValues(-0.5, 0, 0));
    const transYpos = mat4.fromTranslation(mat4.create(), vec3.fromValues( 0, 0.5, 0));
    const transYneg = mat4.fromTranslation(mat4.create(), vec3.fromValues( 0,-0.5, 0));
    const transZpos = mat4.fromTranslation(mat4.create(), vec3.fromValues( 0, 0, 0.5));
    const transZneg = mat4.fromTranslation(mat4.create(), vec3.fromValues( 0, 0,-0.5));

    var rotX = mat4.fromXRotation(mat4.create(), spinAngle2 * Math.PI/180.0);
    var rotY = mat4.fromYRotation(mat4.create(), spinAngle2 * Math.PI/180.0);
    var rotZ = mat4.fromZRotation(mat4.create(), spinAngle2 * Math.PI/180.0);
    var currentRot;

    if(currentAxis==10) {
        currentRot = rotX;
    }
    else if(currentAxis==11) {
        currentRot = rotY;
    }
    else {
        currentRot = rotZ;
    }



    switch (event.key) {
        case "1":
            mat4.lookAt(viewMat,
                vec3.fromValues(10, -3, 2), /* eye */
                vec3.fromValues(0, 0, 0), /* focal point */
                vec3.fromValues(0, 0, 1));
            break;
        case "2":
        mat4.lookAt(viewMat,
            vec3.fromValues(0,0,2),
            vec3.fromValues(0,0,0),
            vec3.fromValues(0,1,0));
            break;
        case "3":
            mat4.lookAt(viewMat,
                vec3.fromValues(6, -5, 2),
                vec3.fromValues(3, -2, 0),
                vec3.fromValues(0, 0, 1)
            );
            break;
        case "4":
            mat4.lookAt(viewMat,
                vec3.fromValues(0, -7, 0),
                vec3.fromValues(3, 0, 0),
                vec3.fromValues(0, 0, 1)
            );
            break;
        case "x":
            if(currentObj==0) {
                mat4.multiply(ringCF, transXneg, ringCF);  // ringCF = Trans * ringCF
                mat4.multiply(chairCF, transXneg, chairCF);
                mat4.multiply(toastCF, transXneg, toastCF);
                mat4.multiply(toasterCF, transXneg, toasterCF);
            }
            if(currentObj==1) {
                mat4.multiply(chairCF, transXneg, chairCF);  // ringCF = Trans * ringCF
            }
            if(currentObj==2)
                mat4.multiply(toastCF, transXneg, toastCF);  // ringCF = Trans * ringCF
            break;

        case "X":
            if(currentObj==0) {
                mat4.multiply(ringCF, transXpos, ringCF);  // ringCF = Trans * ringCF
                mat4.multiply(chairCF, transXpos, chairCF);
                mat4.multiply(toastCF, transXpos, toastCF);
                mat4.multiply(toasterCF, transXpos, toasterCF);
            }
            if(currentObj==1) {
                mat4.multiply(chairCF, transXpos, chairCF);  // ringCF = Trans * ringCF
            }
            if(currentObj==2)
                mat4.multiply(toastCF, transXpos, toastCF);  // ringCF = Trans * ringCF
            break;

        case "y":
            if(currentObj==0) {
                mat4.multiply(ringCF, transYneg, ringCF);  // ringCF = Trans * ringCF
                mat4.multiply(chairCF, transYneg, chairCF);
                mat4.multiply(toastCF, transYneg, toastCF);
                mat4.multiply(toasterCF, transYneg, toasterCF);
            }
            if(currentObj==1) {
                mat4.multiply(chairCF, transYneg, chairCF);  // ringCF = Trans * ringCF
            }
            if(currentObj==2) {
                mat4.multiply(toastCF, transYneg, toastCF);  // ringCF = Trans * ringCF
            }
            break;
        case "Y":
            if(currentObj==0) {
                mat4.multiply(ringCF, transYpos, ringCF);  // ringCF = Trans * ringCF
                mat4.multiply(chairCF, transYpos, chairCF);
                mat4.multiply(toastCF, transYpos, toastCF);
                mat4.multiply(toasterCF, transYpos, toasterCF);
            }
            if(currentObj==1) {
                mat4.multiply(chairCF, transYpos, chairCF);  // ringCF = Trans * ringCF
            }
            if(currentObj==2) {
                mat4.multiply(toastCF, transYpos, toastCF);  // ringCF = Trans * ringCF
            }
            break;
        case "z":
            if(currentObj==0) {
                mat4.multiply(ringCF, transZneg, ringCF);  // ringCF = Trans * ringCF
                mat4.multiply(chairCF, transZneg, chairCF);
                mat4.multiply(toastCF, transZneg, toastCF);
                mat4.multiply(toasterCF, transZneg, toasterCF);
            }
            if(currentObj==1) {
                mat4.multiply(chairCF, transZneg, chairCF);  // ringCF = Trans * ringCF
            }
            if(currentObj==2) {
                mat4.multiply(toastCF, transZneg, toastCF);  // ringCF = Trans * ringCF
            }
            break;
        case "Z":
            if(currentObj==0) {
                mat4.multiply(ringCF, transZpos, ringCF);  // ringCF = Trans * ringCF
                mat4.multiply(chairCF, transZpos, chairCF);
                mat4.multiply(toastCF, transZpos, toastCF);
                mat4.multiply(toasterCF, transZpos, toasterCF);
            }
            if(currentObj==1) {
                mat4.multiply(chairCF, transZpos, chairCF);  // ringCF = Trans * ringCF
            }
            if(currentObj==2) {
                mat4.multiply(toastCF, transZpos, toastCF);  // ringCF = Trans * ringCF
            }
            break;

        case "r":
            //spinAngle2 = spinAngle2+0.1;
            spinAngle2 = 6;
            if(currentObj==0) {
                mat4.multiply(ringCF, ringCF, currentRot);  // ringCF = Trans * ringCF
                mat4.multiply(chairCF, chairCF, currentRot);
                mat4.multiply(toastCF, toastCF, currentRot);
                mat4.multiply(toasterCF, toasterCF, currentRot);
            }
            if(currentObj==1) {
                mat4.multiply(chairCF, chairCF, currentRot);  // ringCF = Trans * ringCF
            }
            if(currentObj==2)
                mat4.multiply(toastCF, toastCF, currentRot);  // ringCF = Trans * ringCF
            break;

        case "R":
            //spinAngle2 = spinAngle2+0.1;
            spinAngle2 = -6;
            if(currentObj==0) {
                mat4.multiply(ringCF, ringCF, currentRot);  // ringCF = Trans * ringCF
                mat4.multiply(chairCF, chairCF, currentRot);
                mat4.multiply(toastCF, toastCF, currentRot);
                mat4.multiply(toasterCF, toasterCF, currentRot);
            }
            if(currentObj==1) {
                mat4.multiply(chairCF, chairCF, currentRot);  // ringCF = Trans * ringCF
            }
            if(currentObj==2)
                mat4.multiply(toastCF, toastCF, currentRot);  // ringCF = Trans * ringCF
            break;
    }
    textOut.innerHTML = "Current Location (" + ringCF[12].toFixed(1) + ", "
        + ringCF[13].toFixed(1) + ", "
        + ringCF[14].toFixed(1) + ")";
}

function render() {
    gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
    draw3D();
    //drawTopView(); /* looking at the XY plane, Z-axis points towards the viewer */
    //drawSideView();

    if(spinAngle<=180)
        spinAngle -= 4.5;  /* add 1 degree */

    if(moveTo >= 1.5) {
        toggle = 1; //move down
    } else if(moveTo <= -1.7) {
        //toggle = 0;
        //spinAngle = 0;
        //moveTo=0;
        //moveTo2=0;
        spinAngle = -90;
        moveTo = -1.7;
        moveTo2 = -1.6;
        //move
        timer++;
    }

    if(timer>=100) {
        timer = 0;
        toggle = 0;
        spinAngle = 0;
        moveTo=0;
        moveTo2=0;
    }

    if(toggle ==1) {
        moveTo = moveTo - 0.04;
        moveTo2 = moveTo2 - 0.02;
        inc =0.1;
    } else {
        moveTo = moveTo + inc;
        inc = inc-0.002;
    }
    requestAnimationFrame(render);
}

function drawScene() {
    //globalAxes.draw(posAttr, colAttr, modelUnif, IDENTITY);

    mat4.fromTranslation(tmpMat, vec3.fromValues(0, 0, 0));
    mat4.multiply(tmpMat, ringCF, tmpMat);   // tmp = ringCF * tmpMat
    objFloor.draw(posAttr, colAttr, modelUnif, tmpMat);
    //objTable.draw(posAttr, colAttr, modelUnif, tmpMat);


    if (typeof obj !== 'undefined') {
        let yPos = 0;

        for(let i = 0; i < 4; i++) {
            let xPos = -0.5;
            mat4.fromTranslation(tmpMat, vec3.fromValues(0, yPos, 0));
            mat4.multiply(tmpMat, ringCF, tmpMat);
            objTable.draw(posAttr, colAttr, modelUnif, tmpMat);
            for (let k = 0; k < 3; k++) {
                mat4.fromTranslation(tmpMat, vec3.fromValues(xPos, yPos, 0));
                mat4.multiply(tmpMat, ringCF, tmpMat);   // tmp = ringCF * tmpMat
                obj.draw(posAttr, colAttr, modelUnif, tmpMat);
                //objChair.draw(posAttr, colAttr, modelUnif, tmpMat);
                xPos += 3.5;
            }

            xPos = 0;
            for (let k = 0; k < 3; k++) {
                //mat4.rotateX(ringCF, ringCF, -Math.PI/2);
                let chairTranslate = mat4.fromTranslation(tmpMat, vec3.fromValues(xPos, yPos, -0.2));
                let tmp3 = mat4.multiply(mat4.create(), chairTranslate, tmpMat);   // tmp = ringCF * tmpMat
                tmp3 = mat4.multiply(tmp3, chairCF, tmp3);
                objChair.draw(posAttr, colAttr, modelUnif, tmp3);

                xPos += 3.5;
            }
            yPos += -6;

            mat4.fromTranslation(tmpMat, vec3.fromValues(0, 0, 0));
            let breadRot = mat4.fromYRotation(mat4.create(), spinAngle * Math.PI/180.0);
            let breadTranslate = mat4.fromTranslation(mat4.create(), vec3.fromValues(moveTo2, 1, moveTo));
            //mat4.rotateX(mat4.create(), spinAngle * Math.PI/180.0);
            let tmp2 = mat4.multiply(mat4.create(), breadTranslate, breadRot);   // tmp = ringCF * tmpMat
            tmp2 = mat4.multiply(tmp2, toastCF, tmp2);
            objBread.draw(posAttr, colAttr, modelUnif, tmp2);
            globalAxes.draw(posAttr, colAttr, modelUnif, tmp2);

            //let toasterRot = mat4.fromYRotation(mat4.create(), spinAngle * Math.PI/180.0);
            let toasterTranslate = mat4.fromTranslation(mat4.create(), vec3.fromValues(0, 0, 0));
            let tmpToaster = mat4.multiply(mat4.create(), toasterTranslate, tmpMat);   // tmp = ringCF * tmpMat
            tmpToaster = mat4.multiply(tmpToaster, toasterCF, tmpToaster);
            mat4.fromTranslation(tmpMat, vec3.fromValues(0, 0, 0));
            objToaster.draw(posAttr, colAttr, modelUnif, tmpToaster);
        }



    }
}

function draw3D() {
    /* We must update the projection and view matrices in the shader */
    gl.uniformMatrix4fv(projUnif, false, persProjMat);
    gl.uniformMatrix4fv(viewUnif, false, viewMat);
    gl.viewport(0, 0, glCanvas.width, glCanvas.height);
    drawScene();
}

/*function drawTopView() {
    gl.uniformMatrix4fv(projUnif, false, orthoProjMat);
    gl.uniformMatrix4fv(viewUnif, false, topViewMat);
    gl.viewport(glCanvas.width/3, 0, glCanvas.width/3, glCanvas.height);
    drawScene();
}*/

/*function drawSideView() {
    /* We must update the projection and view matrices in the shader
    gl.uniformMatrix4fv(projUnif, false, persProjMat);
    gl.uniformMatrix4fv(viewUnif, false, sideViewMat);
    gl.viewport(glCanvas.width/2, 0, glCanvas.width/3, glCanvas.height);
    drawScene();
}*/

