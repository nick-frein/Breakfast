/**
 * Created by nickfrein on 3/13/17.
 */

class bread {
    constructor (gl) {

        /**************************************************************************************************/

        this.toast = new Cube(gl, 1, 1, vec3.fromValues(0x10 / 0x11, 0x10 / 0x11, 0x15 / 0x20),
            vec3.fromValues(0x10 / 0x11, 0x10 / 0x11, 0x15 / 0x20),
            vec3.fromValues(0x10 / 0x11, 0x10 / 0x11, 0x15 / 0x20));
        this.crust = new Cube(gl, 1.01, 1, vec3.fromValues(0x10 / 0x21, 0x10 / 0x31, 0x15 / 0x40),
            vec3.fromValues(0x10 / 0x21, 0x10 / 0x31, 0x15 / 0x40),
            vec3.fromValues(0x10 / 0x21, 0x10 / 0x31, 0x15 / 0x40));
        this.crustCorner = new Cylinder(gl, 0.5, 0.5, 0.25, 20, vec3.fromValues(0x10 / 0x21, 0x10 / 0x31, 0x15 / 0x40),
            vec3.fromValues(0x10 / 0x21, 0x10 / 0x31, 0x15 / 0x40));
        this.crustCornerB = new Cylinder(gl, 0.5, 0.5, 0.25, 20, vec3.fromValues(0x10 / 0x11, 0x10 / 0x11, 0x15 / 0x20),
            vec3.fromValues(0x10 / 0x11, 0x10 / 0x11, 0x15 / 0x20));

        /**************************************************************************************************/

        this.toastTransform = mat4.create();
        let moveToast = vec3.fromValues(0, 0, 0);
        let scaleToast = vec3.fromValues(0.15, 0.75, 0.75);
        mat4.translate(this.toastTransform, this.toastTransform, moveToast);
        mat4.scale(this.toastTransform, this.toastTransform, scaleToast);

        this.crustTransform = mat4.create();
        let moveCrust = vec3.fromValues(0, 0, 0);
        let scaleCrust = vec3.fromValues(0.125, 0.8, 0.8);
        mat4.translate(this.crustTransform, this.crustTransform, moveCrust);
        mat4.scale(this.crustTransform, this.crustTransform, scaleCrust);

        this.crustCornerTransform = mat4.create();
        let moveCrustCorner = vec3.fromValues(-0.4, 0.25, 0);
        let scaleCrustCorner = vec3.fromValues(0.3, 0.5, 0.5);
        let rotCorner = vec3.fromValues (0, 1, 0);
        mat4.fromRotation(this.crustCornerTransform, Math.PI/2, rotCorner);
        mat4.translate(this.crustCornerTransform, this.crustCornerTransform, moveCrustCorner);
        mat4.scale(this.crustCornerTransform, this.crustCornerTransform, scaleCrustCorner);

        this.crustCornerBTransform = mat4.create();
        let moveCrustCornerB = vec3.fromValues(-0.4, 0.25, 0);
        let scaleCrustCornerB = vec3.fromValues(0.29, 0.49, 0.52);
        let rotCornerB = vec3.fromValues (0, 1, 0);
        mat4.fromRotation(this.crustCornerBTransform, Math.PI/2, rotCornerB);
        mat4.translate(this.crustCornerBTransform, this.crustCornerBTransform, moveCrustCornerB);
        mat4.scale(this.crustCornerBTransform, this.crustCornerBTransform, scaleCrustCornerB);

        this.crustCorner2Transform = mat4.create();
        let moveCrustCorner2 = vec3.fromValues(-0.4, -0.25, 0);
        let scaleCrustCorner2 = vec3.fromValues(0.3, 0.5, 0.5);
        let rotCorner2 = vec3.fromValues (0, 1, 0);
        mat4.fromRotation(this.crustCorner2Transform, Math.PI/2, rotCorner2);
        mat4.translate(this.crustCorner2Transform, this.crustCorner2Transform, moveCrustCorner2);
        mat4.scale(this.crustCorner2Transform, this.crustCorner2Transform, scaleCrustCorner2);

        this.crustCornerB2Transform = mat4.create();
        let moveCrustCornerB2 = vec3.fromValues(-0.4, -0.25, 0);
        let scaleCrustCornerB2 = vec3.fromValues(0.29, 0.49, 0.52);
        let rotCornerB2 = vec3.fromValues (0, 1, 0);
        mat4.fromRotation(this.crustCornerB2Transform, Math.PI/2, rotCornerB2);
        mat4.translate(this.crustCornerB2Transform, this.crustCornerB2Transform, moveCrustCornerB2);
        mat4.scale(this.crustCornerB2Transform, this.crustCornerB2Transform, scaleCrustCornerB2);


        this.tmp = mat4.create();
    }
/**************************************************************************************************/
        draw (vertexAttr, colorAttr, modelUniform, coordFrame) {
            mat4.mul(this.tmp, coordFrame, this.toastTransform);
            this.toast.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

            mat4.mul(this.tmp, coordFrame, this.crustTransform);
            this.crust.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

            mat4.mul(this.tmp, coordFrame, this.crustCornerTransform);
            this.crustCorner.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

            mat4.mul(this.tmp, coordFrame, this.crustCorner2Transform);
            this.crustCorner.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

            mat4.mul(this.tmp, coordFrame, this.crustCornerBTransform);
            this.crustCornerB.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

            mat4.mul(this.tmp, coordFrame, this.crustCornerB2Transform);
            this.crustCornerB.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
        }

}
