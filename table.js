/**
 * Created by nickfrein on 2/25/17.
 */
class table {
    constructor(gl) {
        //this.panSides = new Ring(gl, 0.55, 0.6, 0.4, 10, 10, vec3.fromValues(220/220, 220/220, 220/220), vec3.fromValues(220/220, 220/220, 220/220));
        //this.panBottom = new Cylinder(gl, 0.575, 0.575, 0.1, 16);
        this.surface = new Cube(gl, 5, 6, vec3.fromValues(0x10 / 0x11, 0x10 / 0x11, 0x15 / 0x20),
            vec3.fromValues(0x10 / 0x11, 0x10 / 0x11, 0x15 / 0x20),
            vec3.fromValues(0x10 / 0x11, 0x10 / 0x11, 0x15 / 0x20));
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

        this.surfaceTransform = mat4.create();
        //mat4.rotateX(this.eggTransform, this.eggTransform, Math.PI/2);
        let moveSurface = vec3.fromValues(0, 0, -10);
        mat4.translate(this.surfaceTransform, this.surfaceTransform, moveSurface);


        this.tmp = mat4.create();
    }

    draw(vertexAttr, colorAttr, modelUniform, coordFrame) {
        /*mat4.mul (this.tmp, coordFrame, this.panSidesTransform);
         this.panSides.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
         */
        /*mat4.mul (this.tmp, coordFrame, this.panBottomTransform);
         this.panBottom.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
         */
        mat4.mul(this.tmp, coordFrame, this.surfaceTransform);
        this.surface.draw(vertexAttr, colorAttr, modelUniform, this.tmp);


    }
}