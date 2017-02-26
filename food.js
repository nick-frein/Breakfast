/**
 * Created by nickfrein on 2/24/17.
 */
class pan {
    constructor (gl) {
        //this.panSides = new Ring(gl, 0.55, 0.6, 0.4, 10, 10, vec3.fromValues(220/220, 220/220, 220/220), vec3.fromValues(220/220, 220/220, 220/220));
        //this.panBottom = new Cylinder(gl, 0.575, 0.575, 0.1, 16);
        this.egg = new Hemisphere(gl, 0.2, 0.2, 8, 6, vec3.fromValues(0xff/0xff, 0xff/0xff, 0x00/0x00), vec3.fromValues(0xff/0xff, 0xff/0xff, 0x00/0x00));
        this.eggWhite = new Cylinder(gl, 0.3, 0.3, 0.1, 16, vec3.fromValues(0xff/0xff, 0xff/0xff, 0xff/0xff), vec3.fromValues(0xff/0xff, 0xff/0xff, 0xff/0xff));
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
        //this.eggWhite2 = new Cylinder(gl, 0.3, 0.3, 0.1, 16, vec3.fromValues(0xff/0xff, 0xff/0xff, 0xff/0xff), vec3.fromValues(0xff/0xff, 0xff/0xff, 0xff/0xff));
        //this.handleConnector = new Cylinder(gl, 0.3, 0.3, 0.1, 16, vec3.fromValues(0xff/0xff, 0xff/0xff, 0xff/0xff), vec3.fromValues(0xff/0xff, 0xff/0xff, 0xff/0xff));

        /*this.panBottomTransform = mat4.create();
        //mat4.rotateX(this.panBottomTransform, this.panBottomTransform, Math.PI/2);
        let moveBottomPan = vec3.fromValues (0, 0, 0);
        mat4.translate (this.panBottomTransform, this.panBottomTransform, moveBottomPan);*/

        /*this.panSidesTransform = mat4.create();
        //mat4.rotateX(this.panSidesTransform, this.panSidesTransform, Math.PI/2);
        let moveUp = vec3.fromValues (0, 0, 0);
        mat4.translate (this.panSidesTransform, this.panSidesTransform, moveUp);*/

        this.eggTransform = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveEgg = vec3.fromValues (0, 0, 0);
        mat4.translate (this.eggTransform, this.eggTransform, moveEgg);

        this.eggWhiteTransform = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveEggWhite = vec3.fromValues (0.1, 0.05, 0.);
        mat4.translate (this.eggWhiteTransform, this.eggWhiteTransform, moveEggWhite);

        this.eggWhite2Transform = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveEggWhite2 = vec3.fromValues (0, 0.2, 0);
        mat4.translate (this.eggWhite2Transform, this.eggWhite2Transform, moveEggWhite2);

        this.eggWhite3Transform = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveEggWhite3 = vec3.fromValues (-0.12, -0.15, 0);
        mat4.translate (this.eggWhite3Transform, this.eggWhite3Transform, moveEggWhite3);

        this.toastTransform = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveToast = vec3.fromValues (1, 0.5, -0.45);
        mat4.translate (this.toastTransform, this.toastTransform, moveToast);

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


        this.tmp = mat4.create();
    }

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

        mat4.mul (this.tmp, coordFrame, this.toastTransform);
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
        this.crustCorner.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.plateTransform);
        this.plate.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
    }
}