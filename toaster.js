/**
 * Created by nickfrein on 3/17/17.
 */
/**
 * Created by nickfrein on 3/13/17.
 */

class toaster {
    constructor (gl) {

        /**************************************************************************************************/

        this.toaster1 = new Cube(gl, .6, 1, vec3.fromValues(0.6,0.6,0.6),
            vec3.fromValues(0.6,0.6,0.6), vec3.fromValues(0.6,0.6,0.6));

        /**************************************************************************************************/

        this.toaster1Transform = mat4.create();
        let moveToaster1 = vec3.fromValues(0, 1, 0.1);
        let scaleToaster1 = vec3.fromValues(0.15, 0.75, 0.75);
        mat4.translate(this.toaster1Transform, this.toaster1Transform, moveToaster1);
        mat4.scale(this.toaster1Transform, this.toaster1Transform, scaleToaster1);

        this.tmp = mat4.create();
    }
    /**************************************************************************************************/
    draw (vertexAttr, colorAttr, modelUniform, coordFrame) {
        mat4.mul(this.tmp, coordFrame, this.toaster1Transform);
        this.toaster1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

    }

}
