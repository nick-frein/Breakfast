/**
 * Created by nickfrein on 3/11/17.
 */
class table {
    constructor (gl) {
        //this.panSides = new Ring(gl, 0.55, 0.6, 0.4, 10, 10, vec3.fromValues(220/220, 220/220, 220/220), vec3.fromValues(220/220, 220/220, 220/220));
        //this.panBottom = new Cylinder(gl, 0.575, 0.575, 0.1, 16);

        this.table1 = new Cube(gl, 1, 1, vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),
            vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff),
            vec3.fromValues(0xcd/0xff,0x85/0xff,0x3f/0xff));
        this.leg1 = new Cube(gl, 1, 1, vec3.fromValues(0xcd/0xf0,0x85/0xf0,0x3f/0xf0),
            vec3.fromValues(0xcd/0xf0,0x85/0xf0,0x3f/0xf0),
            vec3.fromValues(0xcd/0xf0,0x85/0xf0,0x3f/0xf0));

/******************************************************************************************/

        this.table1Transform = mat4.create();
        let moveTable1 = vec3.fromValues(4, 0, -0.1);
        let scaleTable1 = vec3.fromValues(12, 4, 0.1);
        mat4.translate(this.table1Transform, this.table1Transform, moveTable1);
        mat4.scale(this.table1Transform, this.table1Transform, scaleTable1);

        this.leg1Transform = mat4.create();
        let moveLeg1 = vec3.fromValues(-1.5, -1.5, -1);
        let scaleLeg1 = vec3.fromValues(.4, .4, 2);
        mat4.translate(this.leg1Transform, this.leg1Transform, moveLeg1);
        mat4.scale(this.leg1Transform, this.leg1Transform, scaleLeg1);

        this.leg2Transform = mat4.create();
        let moveLeg2 = vec3.fromValues(-1.5, 1.5, -1);
        let scaleLeg2 = vec3.fromValues(.4, .4, 2);
        mat4.translate(this.leg2Transform, this.leg2Transform, moveLeg2);
        mat4.scale(this.leg2Transform, this.leg2Transform, scaleLeg2);

        this.leg3Transform = mat4.create();
        let moveLeg3 = vec3.fromValues(9.5, -1.5, -1);
        let scaleLeg3 = vec3.fromValues(.4, .4, 2);
        mat4.translate(this.leg3Transform, this.leg3Transform, moveLeg3);
        mat4.scale(this.leg3Transform, this.leg3Transform, scaleLeg3);

        this.leg4Transform = mat4.create();
        let moveLeg4 = vec3.fromValues(9.5, 1.5, -1);
        let scaleLeg4 = vec3.fromValues(.4, .4, 2);
        mat4.translate(this.leg4Transform, this.leg4Transform, moveLeg4);
        mat4.scale(this.leg4Transform, this.leg4Transform, scaleLeg4);

        this.tmp = mat4.create();
    }

/******************************************************************************************/

    draw (vertexAttr, colorAttr, modelUniform, coordFrame) {
        mat4.mul (this.tmp, coordFrame, this.table1Transform);
        this.table1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.leg1Transform);
        this.leg1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.leg2Transform);
        this.leg1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.leg3Transform);
        this.leg1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.leg4Transform);
        this.leg1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

    }
}