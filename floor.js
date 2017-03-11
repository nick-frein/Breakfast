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

        this.window = new Cube(gl, 1, 1, vec3.fromValues(0.2, 0.5, 0.9),
            vec3.fromValues(0.2, 0.5, 0.9),
            vec3.fromValues(0.2, 0.5, 0.9));

        this.windowFrame = new Cube(gl, 1, 1, vec3.fromValues(1, 1, 1),
            vec3.fromValues(1, 1, 1),
            vec3.fromValues(1, 1, 1));


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

        this.windowTransform = mat4.create();
        let moveWindow = vec3.fromValues(-3.8, 2, 1.5);
        let scaleWindow = vec3.fromValues(0.1, 2, 2);
        mat4.translate(this.windowTransform, this.windowTransform, moveWindow);
        mat4.scale(this.windowTransform, this.windowTransform, scaleWindow);

        this.windowFrameTransform = mat4.create();
        let moveWindowFrame = vec3.fromValues(-3.9, 2, 1.5);
        let scaleWindowFrame = vec3.fromValues(0.1, 2.5, 2.5);
        mat4.translate(this.windowFrameTransform, this.windowFrameTransform, moveWindowFrame);
        mat4.scale(this.windowFrameTransform, this.windowFrameTransform, scaleWindowFrame);

        this.windowInnerFrameTransform = mat4.create();
        let moveWindowInnerFrame = vec3.fromValues(-3.7, 2, 1.5);
        let scaleWindowInnerFrame = vec3.fromValues(0.1, 0.1, 2.5);
        mat4.translate(this.windowInnerFrameTransform, this.windowInnerFrameTransform, moveWindowInnerFrame);
        mat4.scale(this.windowInnerFrameTransform, this.windowInnerFrameTransform, scaleWindowInnerFrame);

        this.windowInnerFrame2Transform = mat4.create();
        let moveWindowInnerFrame2 = vec3.fromValues(-3.7, 2, 1.5);
        let scaleWindowInnerFrame2 = vec3.fromValues(0.1, 2.5, 0.1);
        mat4.translate(this.windowInnerFrame2Transform, this.windowInnerFrame2Transform, moveWindowInnerFrame2);
        mat4.scale(this.windowInnerFrame2Transform, this.windowInnerFrame2Transform, scaleWindowInnerFrame2);

        this.tmp = mat4.create();
    }

/*********************************************************************************************/

    draw (vertexAttr, colorAttr, modelUniform, coordFrame) {
        mat4.mul (this.tmp, coordFrame, this.floor1Transform);
        this.floor1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.wallNorthTransform);
        this.wallNorth.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.windowTransform);
        this.window.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.windowFrameTransform);
        this.windowFrame.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.windowInnerFrameTransform);
        this.windowFrame.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.windowInnerFrame2Transform);
        this.windowFrame.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
    }
}