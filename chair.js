/**
 * Created by nickfrein on 3/11/17.
 */
class chair {
    constructor (gl) {
        this.chairleg1 = new Cube(gl, 1, 1,vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),
            vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),vec3.fromValues(0xa0/0xff,0x52/0xff,0x2d/0xff));
        this.chairleg2 = new Cube(gl, 1, 1,vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),
            vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),vec3.fromValues(0xa0/0xff,0x52/0xff,0x2d/0xff));
        this.chairleg3 = new Cube(gl, 1, 1,vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),
            vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),vec3.fromValues(0xa0/0xff,0x52/0xff,0x2d/0xff));
        this.chairleg4 = new Cube(gl, 1, 1,vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),
            vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),vec3.fromValues(0xa0/0xff,0x52/0xff,0x2d/0xff));
        this.chairbot = new Cube(gl, 1, 1,vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),
            vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),vec3.fromValues(0xa0/0xff,0x52/0xff,0x2d/0xff));
        this.chairback = new Cube(gl, 1, 1,vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),
            vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),vec3.fromValues(0xa0/0xff,0x52/0xff,0x2d/0xff));



        this.leg1Transform= mat4.create();
        let moveLeg1 = vec3.fromValues (.25, -2, -1);
        let scaleLeg1 = vec3.fromValues (.1, .1, 1);
        mat4.translate (this.leg1Transform, this.leg1Transform, moveLeg1);
        mat4.scale (this.leg1Transform, this.leg1Transform, scaleLeg1);

        this.leg2Transform= mat4.create();
        let moveLeg2 = vec3.fromValues (1.25, -2, -1);
        let scaleLeg2 = vec3.fromValues (.1, .1, 1);
        mat4.translate (this.leg2Transform, this.leg2Transform, moveLeg2);
        mat4.scale (this.leg2Transform, this.leg2Transform, scaleLeg2);

        this.leg3Transform= mat4.create();
        let moveLeg3 = vec3.fromValues (.25, -3, -1);
        let scaleLeg3 = vec3.fromValues (.1, .1, 1);
        mat4.translate (this.leg3Transform, this.leg3Transform, moveLeg3);
        mat4.scale (this.leg3Transform, this.leg3Transform, scaleLeg3);

        this.leg4Transform= mat4.create();
        let moveLeg4 = vec3.fromValues (1.25, -3, -1);
        let scaleLeg4 = vec3.fromValues (.1, .1, 1);
        mat4.translate (this.leg4Transform, this.leg4Transform, moveLeg4);
        mat4.scale (this.leg4Transform, this.leg4Transform, scaleLeg4);

        this.chairBotTransform= mat4.create();
        let moveBot = vec3.fromValues (.75, -2.5, -.5);
        let scaleBot = vec3.fromValues (1.1, 1.1, .1);
        mat4.translate (this.chairBotTransform, this.chairBotTransform, moveBot);
        mat4.scale (this.chairBotTransform, this.chairBotTransform, scaleBot);

        this.chairBackTransform= mat4.create();
        let moveBack = vec3.fromValues (.75, -3, .25);
        let scaleBack = vec3.fromValues (1.1, .1, 1.5);
        mat4.translate (this.chairBackTransform, this.chairBackTransform, moveBack);
        mat4.scale (this.chairBackTransform, this.chairBackTransform, scaleBack);

        this.tmp = mat4.create();
    }

/******************************************************************************************/
//          DRAW
/******************************************************************************************/

    draw (vertexAttr, colorAttr, modelUniform, coordFrame) {
        mat4.mul (this.tmp, coordFrame, this.leg1Transform);
        this.chairleg1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.leg2Transform);
        this.chairleg2.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.leg3Transform);
        this.chairleg3.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.leg4Transform);
        this.chairleg4.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.chairBotTransform);
        this.chairbot.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.chairBackTransform);
        this.chairback.draw(vertexAttr, colorAttr, modelUniform, this.tmp);
    }
}