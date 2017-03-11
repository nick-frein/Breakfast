/**
 * Created by nickfrein on 3/11/17.
 */
class table {
    constructor (gl) {
        //this.panSides = new Ring(gl, 0.55, 0.6, 0.4, 10, 10, vec3.fromValues(220/220, 220/220, 220/220), vec3.fromValues(220/220, 220/220, 220/220));
        //this.panBottom = new Cylinder(gl, 0.575, 0.575, 0.1, 16);

        this.floor1 = new Cube(gl, 1, 1, vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),
            vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),
            vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff));


        this.floor1Transform = mat4.create();
        let moveFloor1 = vec3.fromValues(0, 0, -0.1);
        let scaleFloor1 = vec3.fromValues(12, 4, 0.1);
        mat4.translate(this.floor1Transform, this.floor1Transform, moveFloor1);
        mat4.scale(this.floor1Transform, this.floor1Transform, scaleFloor1);

        this.tmp = mat4.create();
    }

    draw (vertexAttr, colorAttr, modelUniform, coordFrame) {
        mat4.mul (this.tmp, coordFrame, this.floor1Transform);
        this.floor1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
    }
}