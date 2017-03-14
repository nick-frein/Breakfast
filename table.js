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
        this.tableShadow = new Cube(gl, 1, 1, vec3.fromValues(0.4,0.2,0.2),
            vec3.fromValues(0.4,0.2,0.2),
            vec3.fromValues(0.4,0.2,0.2));
        this.table2 = new Cube(gl, 1, 1, vec3.fromValues(0.7,0.4,0.0),
            vec3.fromValues(0.7,0.4,0.0),
            vec3.fromValues(0.7,0.4,0.0));
        this.leg1 = new Cube(gl, 1, 1, vec3.fromValues(0xcd/0xf0,0x85/0xf0,0x3f/0xf0),
            vec3.fromValues(0xcd/0xf0,0x85/0xf0,0x3f/0xf0),
            vec3.fromValues(0xcd/0xf0,0x85/0xf0,0x3f/0xf0));

        this.toast = new Cube(gl, 1,1,vec3.fromValues(0x10/0x11,0x10/0x11,0x15/0x20),
            vec3.fromValues(0x10/0x11,0x10/0x11,0x15/0x20),
            vec3.fromValues(0x10/0x11,0x10/0x11,0x15/0x20));
        this.crust = new Cube(gl, 1.01,1,vec3.fromValues(0x10/0x21,0x10/0x31,0x15/0x40),
            vec3.fromValues(0x10/0x21,0x10/0x31,0x15/0x40),
            vec3.fromValues(0x10/0x21,0x10/0x31,0x15/0x40));
        this.crustCorner = new Cylinder(gl, 0.4,0.3,0.1,16,vec3.fromValues(0x10/0x11,0x10/0x11,0x15/0x20),
            vec3.fromValues(0x10/0x11,0x10/0x11,0x15/0x20));
        this.crustCorner = new Cylinder(gl, 0.4,0.3,0.25,16,vec3.fromValues(0x10/0x21,0x10/0x31,0x15/0x40),
            vec3.fromValues(0x10/0x21,0x10/0x31,0x15/0x40));

/******************************************************************************************/

        this.toastTransform = mat4.create();
        let moveToast = vec3.fromValues(0, 1, 0.1);
        let scaleToast = vec3.fromValues(0.15, 0.75, 0.75);
        mat4.translate(this.toastTransform, this.toastTransform, moveToast);
        mat4.scale(this.toastTransform, this.toastTransform, scaleToast);

        this.crustTransform = mat4.create();
        let moveCrust = vec3.fromValues(0, 1, 0.1);
        let scaleCrust = vec3.fromValues(0.125, 0.8, 0.8);
        mat4.translate(this.crustTransform, this.crustTransform, moveCrust);
        mat4.scale(this.crustTransform, this.crustTransform, scaleCrust);

        this.table1Transform = mat4.create();
        let moveTable1 = vec3.fromValues(4, 0, -0.1);
        let scaleTable1 = vec3.fromValues(12, 4, 0.1);
        mat4.translate(this.table1Transform, this.table1Transform, moveTable1);
        mat4.scale(this.table1Transform, this.table1Transform, scaleTable1);

        this.table2Transform = mat4.create();
        let moveTable2 = vec3.fromValues(4.1, -0.05, -0.2);
        let scaleTable2 = vec3.fromValues(12, 4, 0.1);
        mat4.translate(this.table2Transform, this.table2Transform, moveTable2);
        mat4.scale(this.table2Transform, this.table2Transform, scaleTable2);

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

        this.tableShadowTransform = mat4.create();
        let moveTableShadow = vec3.fromValues(4, 0, -1.9);
        let scaleTableShadow = vec3.fromValues(12, 4, 0.1);
        mat4.translate(this.tableShadowTransform, this.tableShadowTransform, moveTableShadow);
        mat4.scale(this.tableShadowTransform, this.tableShadowTransform, scaleTableShadow);

        this.tmp = mat4.create();
    }

/******************************************************************************************/

    draw (vertexAttr, colorAttr, modelUniform, coordFrame) {
        /*mat4.mul (this.tmp, coordFrame, this.toastTransform);
        this.toast.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.crustTransform);
        this.crust.draw(vertexAttr, colorAttr, modelUniform, this.tmp);*/

        mat4.mul (this.tmp, coordFrame, this.table1Transform);
        this.table1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.table2Transform);
        this.table2.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.leg1Transform);
        this.leg1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.leg2Transform);
        this.leg1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.leg3Transform);
        this.leg1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.leg4Transform);
        this.leg1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul (this.tmp, coordFrame, this.tableShadowTransform);
        this.tableShadow.draw(vertexAttr, colorAttr, modelUniform, this.tmp);


    }
}