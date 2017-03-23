/**
 * Created by nickfrein on 3/11/17.
 */
class floor {
    constructor (gl) {
        //this.panSides = new Ring(gl, 0.55, 0.6, 0.4, 10, 10, vec3.fromValues(220/220, 220/220, 220/220), vec3.fromValues(220/220, 220/220, 220/220));
        //this.panBottom = new Cylinder(gl, 0.575, 0.575, 0.1, 16);

        this.floor1 = new Cube(gl, 1, 1, vec3.fromValues(0.5,0.2,0.2),
            vec3.fromValues(0.5,0.2,0.2),
            vec3.fromValues(0.5,0.2,0.2));

        this.wallNorth = new Cube(gl, 1, 1, vec3.fromValues(0xee / 0xff, 0xc8 / 0xff, 0x97 / 0xff),
            vec3.fromValues(0xce / 0xff, 0xa8 / 0xff, 0x77 / 0xff),
            vec3.fromValues(0xde / 0xff, 0xb8 / 0xff, 0x87 / 0xff));

        this.wallEast = new Cube(gl, 1, 1, vec3.fromValues(0xee / 0xff, 0xc8 / 0xff, 0x97 / 0xff),
            vec3.fromValues(0xce / 0xff, 0xa8 / 0xff, 0x77 / 0xff),
            vec3.fromValues(0xde / 0xff, 0xb8 / 0xff, 0x87 / 0xff));

        this.ceiling = new Cube(gl, 1, 1, vec3.fromValues(0xee / 0xff, 0xc8 / 0xff, 0x97 / 0xff),
            vec3.fromValues(0xce / 0xff, 0xa8 / 0xff, 0x77 / 0xff),
            vec3.fromValues(0xde / 0xff, 0xb8 / 0xff, 0x87 / 0xff));

        this.window = new Cube(gl, 1, 1, vec3.fromValues(0.2, 0.5, 0.9),
            vec3.fromValues(0.2, 0.5, 0.9),
            vec3.fromValues(0.2, 0.5, 0.9));

        this.windowFrame = new Cube(gl, 1, 1, vec3.fromValues(1, 1, 1),
            vec3.fromValues(1, 1, 1),
            vec3.fromValues(1, 1, 1));

        //gl, inRadius, outRadius, height, subDiv, vertSubDiv, col1, col2
        this.garbage = new Ring(gl, 1, 1, 1, 10, 10, vec3.fromValues(0.5, 0.5, 0.5),
            vec3.fromValues(0.5, 0.5, 0.5));
        this.garbageBag = new Ring(gl, 1, 1, 1, 10, 10, vec3.fromValues(0.1, 0.1, 0.1),
            vec3.fromValues(0.1, 0.1, 0.1));


/*********************************************************************************************/

        this.floor1Transform = mat4.create();
        let moveFloor1 = vec3.fromValues(0, 0, -2);
        let scaleFloor1 = vec3.fromValues(50, 50, 0.1);
        mat4.translate(this.floor1Transform, this.floor1Transform, moveFloor1);
        mat4.scale(this.floor1Transform, this.floor1Transform, scaleFloor1);

        this.wallNorthTransform = mat4.create();
        let moveWallNorth = vec3.fromValues(-4, 4, 0);
        let scaleWallNorth = vec3.fromValues(0.1, 30, 30);
        mat4.translate(this.wallNorthTransform, this.wallNorthTransform, moveWallNorth);
        mat4.scale(this.wallNorthTransform, this.wallNorthTransform, scaleWallNorth);

        this.wallEastTransform = mat4.create();
        let moveWallEast = vec3.fromValues(6, -6, 0);
        let scaleWallEast = vec3.fromValues(0.1, 30, 30);
        let rotWallEast = vec3.fromValues (0, 0, 1);
        mat4.fromRotation(this.wallEastTransform, Math.PI/2, rotWallEast);
        mat4.translate(this.wallEastTransform, this.wallEastTransform, moveWallEast);
        mat4.scale(this.wallEastTransform, this.wallEastTransform, scaleWallEast);

        this.ceilingTransform = mat4.create();
        let moveCeiling = vec3.fromValues(-5, 0, 0);
        let scaleCeiling = vec3.fromValues(0.1, 10, 10);
        let rotCeiling = vec3.fromValues (0, 1, 0);
        mat4.fromRotation(this.ceilingTransform, Math.PI/2, rotCeiling);
        mat4.translate(this.ceilingTransform, this.ceilingTransform, moveCeiling);
        mat4.scale(this.ceilingTransform, this.ceilingTransform, scaleCeiling);

        this.windowTransform = mat4.create();
        let moveWindow = vec3.fromValues(-3.85, 2, 3);
        let scaleWindow = vec3.fromValues(0.1, 2, 2);
        mat4.translate(this.windowTransform, this.windowTransform, moveWindow);
        mat4.scale(this.windowTransform, this.windowTransform, scaleWindow);

        this.windowFrameTransform = mat4.create();
        let moveWindowFrame = vec3.fromValues(-3.9, 2, 3);
        let scaleWindowFrame = vec3.fromValues(0.1, 2.5, 2.5);
        mat4.translate(this.windowFrameTransform, this.windowFrameTransform, moveWindowFrame);
        mat4.scale(this.windowFrameTransform, this.windowFrameTransform, scaleWindowFrame);

        this.windowInnerFrameTransform = mat4.create();
        let moveWindowInnerFrame = vec3.fromValues(-3.8, 2, 3);
        let scaleWindowInnerFrame = vec3.fromValues(0.1, 0.1, 2.5);
        mat4.translate(this.windowInnerFrameTransform, this.windowInnerFrameTransform, moveWindowInnerFrame);
        mat4.scale(this.windowInnerFrameTransform, this.windowInnerFrameTransform, scaleWindowInnerFrame);

        this.windowInnerFrame2Transform = mat4.create();
        let moveWindowInnerFrame2 = vec3.fromValues(-3.8, 2, 3);
        let scaleWindowInnerFrame2 = vec3.fromValues(0.1, 2.5, 0.1);
        mat4.translate(this.windowInnerFrame2Transform, this.windowInnerFrame2Transform, moveWindowInnerFrame2);
        mat4.scale(this.windowInnerFrame2Transform, this.windowInnerFrame2Transform, scaleWindowInnerFrame2);

        this.garbageTransform = mat4.create();
        let moveGarbage = vec3.fromValues(-2.75, 4.75, -2);
        let scaleGarbage = vec3.fromValues(1, 1, 2);
        mat4.translate(this.garbageTransform, this.garbageTransform, moveGarbage);
        mat4.scale(this.garbageTransform, this.garbageTransform, scaleGarbage);

        this.garbageBagTransform = mat4.create();
        let moveGarbageBag = vec3.fromValues(-2.75, 4.75, -2);
        let scaleGarbageBag = vec3.fromValues(0.9, 0.9, 2);
        mat4.translate(this.garbageBagTransform, this.garbageBagTransform, moveGarbageBag);
        mat4.scale(this.garbageBagTransform, this.garbageBagTransform, scaleGarbageBag);

        this.tmp = mat4.create();
    }

/*********************************************************************************************/

    draw (vertexAttr, colorAttr, modelUniform, coordFrame) {
        mat4.mul (this.tmp, coordFrame, this.floor1Transform);
        this.floor1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.wallNorthTransform);
        this.wallNorth.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.wallEastTransform);
        this.wallEast.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        //mat4.mul (this.tmp, coordFrame, this.ceilingTransform);
        //this.ceiling.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.windowTransform);
        this.window.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.windowFrameTransform);
        this.windowFrame.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.windowInnerFrameTransform);
        this.windowFrame.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.windowInnerFrame2Transform);
        this.windowFrame.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.garbageTransform);
        this.garbage.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.garbageBagTransform);
        this.garbageBag.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
    }
}