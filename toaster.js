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
        this.toaster2 = new Cube(gl, .6, 1, vec3.fromValues(0,0,0),
            vec3.fromValues(0,0,0), vec3.fromValues(0,0,0));
        this.toasterShadow = new Cube(gl, .6, 1, vec3.fromValues(0.7,0.7,0.7),
            vec3.fromValues(0.7,0.7,0.7), vec3.fromValues(0.7,0.7,0.7));
        this.leverSlide = new Cube(gl, .6, 1, vec3.fromValues(0,0,0),
            vec3.fromValues(0,0,0), vec3.fromValues(0,0,0));
        this.tCorner = new Cylinder(gl, .5, 0.5, 0.6, 8, vec3.fromValues(0.6,0.6,0.6),
            vec3.fromValues(0.6,0.6,0.6));

        /**************************************************************************************************/

        this.toaster1Transform = mat4.create();
        let moveToaster1 = vec3.fromValues(-0.25, 1, 0.1);
        let scaleToaster1 = vec3.fromValues(0.25, 2, 2);
        mat4.translate(this.toaster1Transform, this.toaster1Transform, moveToaster1);
        mat4.scale(this.toaster1Transform, this.toaster1Transform, scaleToaster1);

        this.toaster2Transform = mat4.create();
        let moveToaster2 = vec3.fromValues(-0.25, 1, 0.1);
        let scaleToaster2 = vec3.fromValues(0.3, 1.9, 1.9);
        mat4.translate(this.toaster2Transform, this.toaster2Transform, moveToaster2);
        mat4.scale(this.toaster2Transform, this.toaster2Transform, scaleToaster2);


        this.toaster3Transform = mat4.create();
        let moveToaster3 = vec3.fromValues(0.225, 1, 0.1);
        let scaleToaster3 = vec3.fromValues(0.3, 1.9, 1.9);
        mat4.translate(this.toaster3Transform, this.toaster3Transform, moveToaster3);
        mat4.scale(this.toaster3Transform, this.toaster3Transform, scaleToaster3);

        this.toaster4Transform = mat4.create();
        let moveToaster4 = vec3.fromValues(0.25, 1, 0.1);
        let scaleToaster4 = vec3.fromValues(0.3, 2, 2);
        mat4.translate(this.toaster4Transform, this.toaster4Transform, moveToaster4);
        mat4.scale(this.toaster4Transform, this.toaster4Transform, scaleToaster4);



        this.tCornerTransform = mat4.create();
        let movetCorner = vec3.fromValues(0, 0, 0);
        let scaletCorner = vec3.fromValues(1, 1, 1);
        let rottCorner = vec3.fromValues (0, 1, 0);
        mat4.fromRotation(this.tCornerTransform, Math.PI/2, rottCorner);
        mat4.translate(this.tCornerTransform, this.tCornerTransform, movetCorner);
        mat4.scale(this.tCornerTransform, this.tCornerTransform, scaletCorner);


        this.toasterSideTransform = mat4.create();
        let moveToasterSide = vec3.fromValues(0, 0.5, 0);
        let scaleToasterSide = vec3.fromValues(1, 0.25, 2);
        //let rotToasterSide = vec3.fromValues (0, 1, 0);
        //mat4.fromRotation(this.toasterSideTransform, Math.PI/2, rotToasterSide);
        mat4.translate(this.toasterSideTransform, this.toasterSideTransform, moveToasterSide);
        mat4.scale(this.toasterSideTransform, this.toasterSideTransform, scaleToasterSide);


        this.toasterSide2Transform = mat4.create();
        let moveToasterSide2 = vec3.fromValues(0, 1.5, 0);
        let scaleToasterSide2 = vec3.fromValues(1, 0.25, 2);
        //let rotToasterSide = vec3.fromValues (0, 1, 0);
        //mat4.fromRotation(this.toasterSideTransform, Math.PI/2, rotToasterSide);
        mat4.translate(this.toasterSide2Transform, this.toasterSide2Transform, moveToasterSide2);
        mat4.scale(this.toasterSide2Transform, this.toasterSide2Transform, scaleToasterSide2);


        this.toasterSideShadowTransform = mat4.create();
        let moveToasterSideShadow = vec3.fromValues(0, 0.45, .1);
        let scaleToasterSideShadow = vec3.fromValues(0.95, 0.245, 1.95);
        //let rotToasterSide = vec3.fromValues (0, 1, 0);
        //mat4.fromRotation(this.toasterSideTransform, Math.PI/2, rotToasterSide);
        mat4.translate(this.toasterSideShadowTransform, this.toasterSideShadowTransform, moveToasterSideShadow);
        mat4.scale(this.toasterSideShadowTransform, this.toasterSideShadowTransform, scaleToasterSideShadow);


        this.toasterSideShadow2Transform = mat4.create();
        let moveToasterSideShadow2 = vec3.fromValues(0, 1.55, .1);
        let scaleToasterSideShadow2 = vec3.fromValues(0.95, 0.245, 1.95);
        //let rotToasterSide = vec3.fromValues (0, 1, 0);
        //mat4.fromRotation(this.toasterSideTransform, Math.PI/2, rotToasterSide);
        mat4.translate(this.toasterSideShadow2Transform, this.toasterSideShadow2Transform, moveToasterSideShadow2);
        mat4.scale(this.toasterSideShadow2Transform, this.toasterSideShadow2Transform, scaleToasterSideShadow2);


        this.leverSlideTransform = mat4.create();
        let moveLeverSlide = vec3.fromValues(0, 0.4, .1);
        let scaleLeverSlide = vec3.fromValues(0.2, 0.1, 1.5);
        //let rotToasterSide = vec3.fromValues (0, 1, 0);
        //mat4.fromRotation(this.toasterSideTransform, Math.PI/2, rotToasterSide);
        mat4.translate(this.leverSlideTransform, this.leverSlideTransform, moveLeverSlide);
        mat4.scale(this.leverSlideTransform, this.leverSlideTransform, scaleLeverSlide);

        this.tmp = mat4.create();
    }
    /**************************************************************************************************/
    draw (vertexAttr, colorAttr, modelUniform, coordFrame) {
        mat4.mul(this.tmp, coordFrame, this.toaster1Transform);
        this.toaster1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul(this.tmp, coordFrame, this.toaster2Transform);
        this.toaster2.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul(this.tmp, coordFrame, this.toaster3Transform);
        this.toaster2.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul(this.tmp, coordFrame, this.toaster4Transform);
        this.toaster1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);








        mat4.mul(this.tmp, coordFrame, this.toasterSideTransform);
        this.toaster1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul(this.tmp, coordFrame, this.toasterSideShadowTransform);
        this.toasterShadow.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul(this.tmp, coordFrame, this.toasterSide2Transform);
        this.toaster1.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul(this.tmp, coordFrame, this.toasterSideShadow2Transform);
        this.toasterShadow.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        mat4.mul(this.tmp, coordFrame, this.leverSlideTransform);
        this.leverSlide.draw(vertexAttr, colorAttr, modelUniform, this.tmp);

        /*mat4.mul(this.tmp, coordFrame, this.tCornerTransform);
        this.tCorner.draw(vertexAttr, colorAttr, modelUniform, this.tmp);*/

    }

}
