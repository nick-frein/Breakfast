/**
 * Created by nickfrein on 3/22/17.
 */
/**
 * Created by nickfrein on 3/17/17.
 */
/**
 * Created by nickfrein on 3/13/17.
 */

class toasterLever {
    constructor (gl) {

        /**************************************************************************************************/

        this.lever = new UniSphere(gl, 0.5, 6, vec3.fromValues(0,0,0), vec3.fromValues(0,0,0));


        /**************************************************************************************************/

        this.leverTransform = mat4.create();
        let moveLever = vec3.fromValues(0, 0, 0);
        let scaleLever = vec3.fromValues(0.5, 0.5, 0.15);
        mat4.translate(this.leverTransform, this.leverTransform, moveLever);
        mat4.scale(this.leverTransform, this.leverTransform, scaleLever);

        this.tmp = mat4.create();
    }
    /**************************************************************************************************/
    draw (vertexAttr, colorAttr, modelUniform, coordFrame) {
        mat4.mul(this.tmp, coordFrame, this.leverTransform);
        this.lever.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        /*mat4.mul(this.tmp, coordFrame, this.tCornerTransform);
         this.tCorner.draw(vertexAttr, colorAttr, modelUniform, this.tmp);*/

    }

}