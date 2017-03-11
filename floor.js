/**
 * Created by nickfrein on 3/11/17.
 */
class floor {
    constructor (gl) {
        //this.panSides = new Ring(gl, 0.55, 0.6, 0.4, 10, 10, vec3.fromValues(220/220, 220/220, 220/220), vec3.fromValues(220/220, 220/220, 220/220));
        //this.panBottom = new Cylinder(gl, 0.575, 0.575, 0.1, 16);

        this.floor1 = new Cube(gl, 1, 1, vec3.fromValues(0xee / 0xff, 0xc8 / 0xff, 0x97 / 0xff),
            vec3.fromValues(0xce / 0xff, 0xa8 / 0xff, 0x77 / 0xff),
            vec3.fromValues(0xde / 0xff, 0xb8 / 0xff, 0x87 / 0xff));

        this.wallNorth = new Cube(gl, 1, 1, vec3.fromValues(0xee / 0xff, 0xc8 / 0xff, 0x97 / 0xff),
            vec3.fromValues(0xce / 0xff, 0xa8 / 0xff, 0x77 / 0xff),
            vec3.fromValues(0xde / 0xff, 0xb8 / 0xff, 0x87 / 0xff));

/*********************************************************************************************/

        this.floor1Transform = mat4.create();
        let moveFloor1 = vec3.fromValues(0, 0, -2);
        let scaleFloor1 = vec3.fromValues(24, 24, 0.1);
        mat4.translate(this.floor1Transform, this.floor1Transform, moveFloor1);
        mat4.scale(this.floor1Transform, this.floor1Transform, scaleFloor1);

        this.wallNorthTransform = mat4.create();
        let moveWallNorth = vec3.fromValues(-4, 0, 0);
        let scaleWallNorth = vec3.fromValues(0.1, 10, 10);
        mat4.translate(this.wallNorthTransform, this.wallNorthTransform, moveWallNorth);
        mat4.scale(this.wallNorthTransform, this.wallNorthTransform, scaleWallNorth);

        this.tmp = mat4.create();
    }

/*********************************************************************************************/

    draw (vertexAttr, colorAttr, modelUniform, coordFrame) {
        mat4.mul (this.tmp, coordFrame, this.floor1Transform);
        this.floor1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.wallNorthTransform);
        this.wallNorth.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
    }
}