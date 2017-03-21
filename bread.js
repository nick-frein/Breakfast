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

        this.tmp = mat4.create();
    }
/**************************************************************************************************/
        draw (vertexAttr, colorAttr, modelUniform, coordFrame) {
            mat4.mul(this.tmp, coordFrame, this.toastTransform);
            this.toast.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

            mat4.mul(this.tmp, coordFrame, this.crustTransform);
            this.crust.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
        }

}
