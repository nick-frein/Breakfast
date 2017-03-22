/**
 * Created by nickfrein on 2/24/17.
 */
class food {
    constructor (gl) {
        this.tartPlateBottom = new Cylinder(gl, .75,.75,.1,16, vec3.fromValues(0xfd/0xff,0xf5/0xff,0xe6/0xff),
            vec3.fromValues(0xcd/0xff,0xc5/0xff,0xb6/0xff));
        this.tartPlate = new Ring(gl, .75, 1,.05,16,1, vec3.fromValues(0xfd/0xff,0xf5/0xff,0xe6/0xff),
            vec3.fromValues(0xcd/0xff,0xc5/0xff,0xb6/0xff));
        this.tart1 = new Cube(gl, .6, 1, vec3.fromValues(0xee/0xff,0xc8/0xff,0x97/0xff),
            vec3.fromValues(0xce/0xff,0xa8/0xff,0x77/0xff),
            vec3.fromValues(0xde/0xff,0xb8/0xff,0x87/0xff));
        this.tart2 = new Cube(gl, .6, 1, vec3.fromValues(0xde/0xff,0xb8/0xff,0x87/0xff),
            vec3.fromValues(0xee/0xff,0xc8/0xff,0x97/0xff),
            vec3.fromValues(0xee/0xff,0xc8/0xff,0x97/0xff));
        this.tart1Frosting = new Cube(gl, .55, 1, vec3.fromValues(0xf0/0xff,0x80/0xff,0x80/0xff),
            vec3.fromValues(0xf0/0xff,0x80/0xff,0x80/0xff),
            vec3.fromValues(0xf0/0xff,0x80/0xff,0x80/0xff));
        this.tart2Frosting = new Cube(gl, .55, 1, vec3.fromValues(0xf0/0xff,0x80/0xff,0x80/0xff),
            vec3.fromValues(0xf0/0xff,0x80/0xff,0x80/0xff),
            vec3.fromValues(0xf0/0xff,0x80/0xff,0x80/0xff));

        this.egg = new Hemisphere(gl, 0.2, 0.2, 8, 6, vec3.fromValues(0xff/0xff, 0xff/0xff, 0x00/0x00),
            vec3.fromValues(0xff/0xff, 0xff/0xff, 0x00/0x00));
        this.eggWhite = new Cylinder(gl, 0.3, 0.3, 0.1, 16, vec3.fromValues(0xff/0xff, 0xff/0xff, 0xff/0xff),
            vec3.fromValues(0xff/0xff, 0xff/0xff, 0xff/0xff));

        this.toast = new Cube(gl, 1,1,vec3.fromValues(0x10/0x11,0x10/0x11,0x15/0x20),
            vec3.fromValues(0x10/0x11,0x10/0x11,0x15/0x20),
            vec3.fromValues(0x10/0x11,0x10/0x11,0x15/0x20));
        this.toastCrust = new Cube(gl, 1.01,1,vec3.fromValues(0x10/0x21,0x10/0x31,0x15/0x40),
            vec3.fromValues(0x10/0x21,0x10/0x31,0x15/0x40),
            vec3.fromValues(0x10/0x21,0x10/0x31,0x15/0x40));
        this.toastCorner = new Cylinder(gl, 0.4,0.3,0.1,16,vec3.fromValues(0x10/0x11,0x10/0x11,0x15/0x20),
            vec3.fromValues(0x10/0x11,0x10/0x11,0x15/0x20));
        this.crustCorner = new Cylinder(gl, 0.4,0.3,0.25,16,vec3.fromValues(0x10/0x21,0x10/0x31,0x15/0x40),
            vec3.fromValues(0x10/0x21,0x10/0x31,0x15/0x40));
        this.plate = new Cylinder(gl, 1.5, 0.3, 0.5, 16);

        this.orange = new Hemisphere(gl, 0.3, 0.3, 8, 6, vec3.fromValues(1.0,0.5,0),
            vec3.fromValues(1.0,0.5,0));
        this.orangeStem = new Cone(gl, 0.025, 0.1, 8, 8, vec3.fromValues(0,0,0),
            vec3.fromValues(0,0,0));

//gl, inRadius, outRadius, height, subDiv, vertSubDiv, col1, col2
        this.cup = new Ring(gl, 0.25, 0.3, 0.5,16,4, vec3.fromValues(0xfd/0xff,0xf5/0xff,0xe6/0xff),
            vec3.fromValues(0xcd/0xff,0xc5/0xff,0xb6/0xff));
        //gl, majRadius, minRadius, majDiv, minDiv, col1, col2
        this.cupHandle = new Torus(gl, 0.2, 0.05, 12, 12, vec3.fromValues(0xfd/0xff,0xf5/0xff,0xe6/0xff),
            vec3.fromValues(0xfd/0xff,0xf5/0xff,0xe6/0xff));
        this.coffee = new Cylinder(gl, 0.25,0.25,0.75,16,vec3.fromValues(0x10/0x21,0x10/0x31,0x15/0x40),
            vec3.fromValues(0x10/0x21,0x10/0x31,0x15/0x40));

        this.forkHandle = new Cube(gl, .6, 1, vec3.fromValues(0.6,0.6,0.6),
            vec3.fromValues(0.6,0.6,0.6), vec3.fromValues(0.6,0.6,0.6));

/******************************************************************************************/
    // Transformations
/******************************************************************************************/

        this.eggTransform = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveEgg = vec3.fromValues (1, -1, .05);
        mat4.translate (this.eggTransform, this.eggTransform, moveEgg);

        this.eggWhiteTransform = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveEggWhite = vec3.fromValues (1.1, -1.05, .05);
        mat4.translate (this.eggWhiteTransform, this.eggWhiteTransform, moveEggWhite);

        this.eggWhite2Transform = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveEggWhite2 = vec3.fromValues (1, -.8, .05);
        mat4.translate (this.eggWhite2Transform, this.eggWhite2Transform, moveEggWhite2);

        this.eggWhite3Transform = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveEggWhite3 = vec3.fromValues (0.92, -1.15, .05);
        mat4.translate (this.eggWhite3Transform, this.eggWhite3Transform, moveEggWhite3);

/******************************************************************************************/

        this.toastTransform = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveToast = vec3.fromValues (1, 0.5, 0);
        let scaleToast = vec3.fromValues (1, 1, 0.25);
        mat4.translate (this.toastTransform, this.toastTransform, moveToast);
        mat4.scale (this.toastTransform, this.toastTransform, scaleToast);

        this.toastCrustTransform = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveToastCrust = vec3.fromValues (1, 0.5, -0.46);
        mat4.translate (this.toastCrustTransform, this.toastCrustTransform, moveToastCrust);

        this.toastCornerTransform = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveToastCorner = vec3.fromValues (0.7, 0.9, 0);
        mat4.translate (this.toastCornerTransform, this.toastCornerTransform, moveToastCorner);

        this.toastCornerTransform2 = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveToastCorner2 = vec3.fromValues (1.3, 0.9, 0);
        mat4.translate (this.toastCornerTransform2, this.toastCornerTransform2, moveToastCorner2);

        this.crustCornerTransform = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveCrustCorner = vec3.fromValues (0.7, 0.9, -0.21);
        mat4.translate (this.crustCornerTransform, this.crustCornerTransform, moveCrustCorner);

        this.crustCornerTransform2 = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveCrustCorner2 = vec3.fromValues (1.3, 0.9, -0.21);
        mat4.translate (this.crustCornerTransform2, this.crustCornerTransform2, moveCrustCorner2);

        this.plateTransform = mat4.create();
        let movePlate = vec3.fromValues (0.7, 0, -0.4);
        mat4.translate (this.plateTransform, this.plateTransform, movePlate);

/******************************************************************************************/

        this.tartPlateBottomTransform= mat4.create();
        let movetartPlateBottom = vec3.fromValues (.8, -.8, 0);
        mat4.translate (this.tartPlateBottomTransform, this.tartPlateBottomTransform, movetartPlateBottom);

        this.tartPlateTransform= mat4.create();
        let movetartPlate = vec3.fromValues (.8, -.8, .05);
        mat4.translate (this.tartPlateTransform, this.tartPlateTransform, movetartPlate);

        this.tart1Transform= mat4.create();
        let moveTart1 = vec3.fromValues (.4, -.8, .075);
        let scaleTart1 = vec3.fromValues (.65, 1, .05);
        mat4.translate (this.tart1Transform, this.tart1Transform, moveTart1);
        mat4.scale (this.tart1Transform, this.tart1Transform, scaleTart1);

        this.tart1FrostingTransform= mat4.create();
        let moveTart1Frosting = vec3.fromValues (.4, -.8, .1);
        let scaleTart1Frosting = vec3.fromValues (.5, .9, .025);
        mat4.translate (this.tart1FrostingTransform, this.tart1FrostingTransform, moveTart1Frosting);
        mat4.scale (this.tart1FrostingTransform, this.tart1FrostingTransform, scaleTart1Frosting);

        this.tart2Transform= mat4.create();
        let moveTart2 = vec3.fromValues (.5, -.8, 0.2);
        let scaleTart2 = vec3.fromValues (.65, 1, .05);
        let rotTart2 = vec3.fromValues (0, 1, 0);
        mat4.fromRotation(this.tart2Transform, Math.PI/20, rotTart2);
        mat4.translate (this.tart2Transform, this.tart2Transform, moveTart2);
        mat4.scale (this.tart2Transform, this.tart2Transform, scaleTart2);

        this.tart2FrostingTransform= mat4.create();
        let moveTart2Frosting = vec3.fromValues (.5, -.8, .225);
        let scaleTart2Frosting = vec3.fromValues (.5, .9, .025);
        let rotTart2Frosting = vec3.fromValues (0, 1, 0);
        mat4.fromRotation(this.tart2FrostingTransform, Math.PI/20, rotTart2Frosting);
        mat4.translate (this.tart2FrostingTransform, this.tart2FrostingTransform, moveTart2Frosting);
        mat4.scale (this.tart2FrostingTransform, this.tart2FrostingTransform, scaleTart2Frosting);

/******************************************************************************************/

        this.orangeTransform= mat4.create();
        let moveOrange = vec3.fromValues (0.9, -.25, .2);
        mat4.translate (this.orangeTransform, this.orangeTransform, moveOrange);

        this.orangeStemTransform= mat4.create();
        let moveOrangeStem = vec3.fromValues (-.2, -.3, .55);
        let rotOrangeStem = vec3.fromValues (0, 1, 0);
        mat4.fromRotation(this.orangeStemTransform, Math.PI/2, rotOrangeStem);
        mat4.translate (this.orangeStemTransform, this.orangeStemTransform, moveOrangeStem);

/******************************************************************************************/

        this.cupTransform= mat4.create();
        let moveCup = vec3.fromValues (-0.5, 0, -0.1);
        mat4.translate (this.cupTransform, this.cupTransform, moveCup);

        this.cupHandleTransform= mat4.create();
        let moveCupHandle = vec3.fromValues (-0.1, 0.1, -0.3);
        let rotCupHandle = vec3.fromValues (1, 1, 0);
        let scaleCupHandle = vec3.fromValues (0.75, 0.75, 1);
        mat4.fromRotation(this.cupHandleTransform, Math.PI/2, rotCupHandle);
        mat4.translate (this.cupHandleTransform, this.cupHandleTransform, moveCupHandle);
        mat4.scale (this.cupHandleTransform, this.cupHandleTransform, scaleCupHandle);

        this.coffeeTransform= mat4.create();
        let moveCoffee = vec3.fromValues (-0.5, 0, 0.15);
        let scaleCoffee = vec3.fromValues (1, 1, 0.5);
        mat4.translate (this.coffeeTransform, this.coffeeTransform, moveCoffee);
        mat4.scale (this.coffeeTransform, this.coffeeTransform, scaleCoffee);

/******************************************************************************************/

        this.forkHandleTransform= mat4.create();
        let moveForkHandle = vec3.fromValues (2.25, -1, -0.05);
        let scaleForkHandle = vec3.fromValues (0.2, 1, 0.025);
        //let rotTart2Frosting = vec3.fromValues (0, 1, 0);
        //mat4.fromRotation(this.tart2FrostingTransform, Math.PI/20, rotTart2Frosting);
        mat4.translate (this.forkHandleTransform, this.forkHandleTransform, moveForkHandle);
        mat4.scale (this.forkHandleTransform, this.forkHandleTransform, scaleForkHandle);

        this.forkTransform= mat4.create();
        let moveFork = vec3.fromValues (2.25, -0.7, -0.05);
        let scaleFork = vec3.fromValues (0.5, 0.4, 0.025);
        //let rotTart2Frosting = vec3.fromValues (0, 1, 0);
        //mat4.fromRotation(this.tart2FrostingTransform, Math.PI/20, rotTart2Frosting);
        mat4.translate (this.forkTransform, this.forkTransform, moveFork);
        mat4.scale (this.forkTransform, this.forkTransform, scaleFork);

        this.fork1Transform= mat4.create();
        let moveFork1 = vec3.fromValues (2.25, -0.5, -0.05);
        let scaleFork1 = vec3.fromValues (0.1, 0.4, 0.025);
        //let rotTart2Frosting = vec3.fromValues (0, 1, 0);
        //mat4.fromRotation(this.tart2FrostingTransform, Math.PI/20, rotTart2Frosting);
        mat4.translate (this.fork1Transform, this.fork1Transform, moveFork1);
        mat4.scale (this.fork1Transform, this.fork1Transform, scaleFork1);

        this.fork2Transform= mat4.create();
        let moveFork2 = vec3.fromValues (2.35, -0.5, -0.05);
        let scaleFork2 = vec3.fromValues (0.1, 0.4, 0.025);
        //let rotTart2Frosting = vec3.fromValues (0, 1, 0);
        //mat4.fromRotation(this.tart2FrostingTransform, Math.PI/20, rotTart2Frosting);
        mat4.translate (this.fork2Transform, this.fork2Transform, moveFork2);
        mat4.scale (this.fork2Transform, this.fork2Transform, scaleFork2);

        this.fork3Transform= mat4.create();
        let moveFork3 = vec3.fromValues (2.15, -0.5, -0.05);
        let scaleFork3 = vec3.fromValues (0.1, 0.4, 0.025);
        //let rotTart2Frosting = vec3.fromValues (0, 1, 0);
        //mat4.fromRotation(this.tart2FrostingTransform, Math.PI/20, rotTart2Frosting);
        mat4.translate (this.fork3Transform, this.fork3Transform, moveFork3);
        mat4.scale (this.fork3Transform, this.fork3Transform, scaleFork3);

        this.tmp = mat4.create();
    }

/******************************************************************************************/
// DRAW
/******************************************************************************************/

    draw (vertexAttr, colorAttr, modelUniform, coordFrame) {
        /*mat4.mul (this.tmp, coordFrame, this.panSidesTransform);
         this.panSides.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
         */
        /*mat4.mul (this.tmp, coordFrame, this.panBottomTransform);
         this.panBottom.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
         */
        mat4.mul (this.tmp, coordFrame, this.eggTransform);
        this.egg.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.eggWhiteTransform);
        this.eggWhite.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.eggWhite2Transform);
        this.eggWhite.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.eggWhite3Transform);
        this.eggWhite.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        /*mat4.mul (this.tmp, coordFrame, this.toastTransform);
        this.toast.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.toastCrustTransform);
        this.toastCrust.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.toastCornerTransform);
        this.toastCorner.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.toastCornerTransform2);
        this.toastCorner.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.crustCornerTransform);
        this.crustCorner.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.crustCornerTransform2);
        this.crustCorner.draw(vertexAttr, colorAttr, modelUniform, this.tmp);*/

        mat4.mul (this.tmp, coordFrame, this.plateTransform);
        //this.plate.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.tartPlateBottomTransform);
        this.tartPlateBottom.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.tartPlateTransform);
        this.tartPlate.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.tart1Transform);
        this.tart1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
        mat4.mul (this.tmp, coordFrame, this.tart1FrostingTransform);
        this.tart1Frosting.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.tart2Transform);
        this.tart2.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
        mat4.mul (this.tmp, coordFrame, this.tart2FrostingTransform);
        this.tart2Frosting.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.orangeTransform);
        this.orange.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.orangeStemTransform);
        this.orangeStem.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.cupTransform);
        this.cup.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.cupHandleTransform);
        this.cupHandle.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.coffeeTransform);
        this.coffee.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.forkHandleTransform);
        this.forkHandle.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.forkTransform);
        this.forkHandle.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.fork1Transform);
        this.forkHandle.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.fork2Transform);
        this.forkHandle.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.fork3Transform);
        this.forkHandle.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
    }
}