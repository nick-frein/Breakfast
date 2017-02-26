/**
 * Created by nickfrein on 2/24/17.
 */
class Ring {
    /**
     * Create a 3D cylinder with tip at the Z+ axis and base on the XY plane
     * @param {Object} gl      the current WebGL context
     * @param {Number} inRadius  radius of the cylinder top
     * @param {Number} outRadius  radius of the cylinder base
     * @param {Number} height  height of the cylinder
     * @param {Number} subDiv  number of radial subdivision of the cylinder base
     * @param {Number} vertSubDiv  number of vertical subdivision of the cylinder base
     * @param {vec3}   col1    color #1 to use
     * @param {vec3}   col2    color #2 to use
     */
    constructor (gl, inRadius, outRadius, height, subDiv, vertSubDiv, col1, col2) {

        /* if colors are undefined, generate random colors */
        if (typeof col1 === "undefined") col1 = vec3.fromValues(Math.random(), Math.random(), Math.random());
        if (typeof col2 === "undefined") col2 = vec3.fromValues(Math.random(), Math.random(), Math.random())
        let randColor = vec3.create();
        let vertices = [];
        this.vbuff = gl.createBuffer();

        /* Instead of allocating two separate JS arrays (one for position and one for color),
         in the following loop we pack both position and color
         so each tuple (x,y,z,r,g,b) describes the properties of a vertex
         */

        for (let i = 0; i <= vertSubDiv; i++) {
            for (let k = 0; k < subDiv; k++) {
                let angle = k * 2 * Math.PI / subDiv;
                let x1 = outRadius * Math.cos(angle);
                let y1 = outRadius * Math.sin(angle);

                /* the first three floats are 3D (x,y,z) position */
                vertices.push(x1, y1, height * (vertSubDiv - i) / vertSubDiv);
                /* perimeter of base */
                vec3.lerp(randColor, col1, col2, Math.random());
                /* linear interpolation between two colors */
                /* the next three floats are RGB */
                vertices.push(randColor[0], randColor[1], randColor[2]);

                let x2 = inRadius * Math.cos(angle);
                let y2 = inRadius * Math.sin(angle);

                /* the first three floats are 3D (x,y,z) position */
                vertices.push(x2, y2, height * (vertSubDiv - i) / vertSubDiv);
                /* perimeter of base */
                vec3.lerp(randColor, col1, col2, Math.random());
                /* linear interpolation between two colors */
                /* the next three floats are RGB */
                vertices.push(randColor[0], randColor[1], randColor[2]);
            }
        }
        /* center of base */

        vec3.lerp(randColor, col1, col2, Math.random());
        /* linear interpolation between two colors */
        vertices.push(randColor[0], randColor[1], randColor[2]);


        /* copy the (x,y,z,r,g,b) sixtuplet into GPU buffer */
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vbuff);
        gl.bufferData(gl.ARRAY_BUFFER, Float32Array.from(vertices), gl.STATIC_DRAW);

        // Generate index order for top of cylinder
        let topIndex = [];

        //topIndex.push(subDiv*2-3);
        topIndex.push(subDiv*2-1);
        topIndex.push(0);
        for (let k = 1; k < subDiv*2; k++)
            topIndex.push(k);
        topIndex.push(0);
        topIndex.push(1);
        this.topIdxBuff = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.topIdxBuff);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, Uint8Array.from(topIndex), gl.STATIC_DRAW);

        //Generate index order for middle of cylinder
        let outerIndex = [];
        //outerIndex.push(subDiv*2);
        outerIndex.push(subDiv*2-2);
        for (let i = 1; i <= vertSubDiv; i++)
            for (let k = 0; k < subDiv; k++) {
                outerIndex.push((i * subDiv + k)*2);
                outerIndex.push(((i - 1) * subDiv + k)*2);
            }
        outerIndex.push((vertSubDiv*2) * subDiv);

        this.outerIdxBuff = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.outerIdxBuff);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, Uint8Array.from(outerIndex), gl.STATIC_DRAW);


        let innerIndex = [];
        //innerIndex.push(subDiv*2+1);
        innerIndex.push(subDiv*2-1);
        innerIndex.push(1);
        for (let i = 1; i <= vertSubDiv; i++)
            for (let k = 0; k < subDiv; k++) {
                innerIndex.push((i * subDiv + k)*2+1);
                innerIndex.push(((i - 1) * subDiv + k)*2+1);
            }
        innerIndex.push(((vertSubDiv*2)) * subDiv+1);

        this.innerIdxBuff = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.innerIdxBuff);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, Uint8Array.from(innerIndex), gl.STATIC_DRAW);

        // Generate index order for bottom of cylinder
        let botIndex = [];
        // botIndex.push(vertSubDiv * subDiv + 1);
        for (let k = subDiv*2-1; k > -1; k--)
            botIndex.push(k + (vertSubDiv) * subDiv*2);
        botIndex.push((vertSubDiv+1) * subDiv*2-1);
        botIndex.push((vertSubDiv+1) * subDiv*2-2);
        this.botIdxBuff = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.botIdxBuff);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, Uint8Array.from(botIndex), gl.STATIC_DRAW);

        /* Put the indices as an array of objects. Each object has three attributes:
         primitive, buffer, and numPoints */

        this.indices = [{"primitive": gl.TRIANGLE_STRIP, "buffer": this.innerIdxBuff, "numPoints": innerIndex.length},
            {"primitive": gl.TRIANGLE_STRIP, "buffer": this.outerIdxBuff, "numPoints": outerIndex.length},
            {"primitive": gl.TRIANGLE_STRIP, "buffer": this.topIdxBuff, "numPoints": topIndex.length},
            {"primitive": gl.TRIANGLE_STRIP, "buffer": this.botIdxBuff, "numPoints": botIndex.length}];

    }

    /**
     * Draw the object
     * @param {Number} vertexAttr a handle to a vec3 attribute in the vertex shader for vertex xyz-position
     * @param {Number} colorAttr  a handle to a vec3 attribute in the vertex shader for vertex rgb-color
     * @param {Number} modelUniform a handle to a mat4 uniform in the shader for the coordinate frame of the model
     * @param {mat4} coordFrame a JS mat4 variable that holds the actual coordinate frame of the object
     */
    draw(vertexAttr, colorAttr, modelUniform, coordFrame) {
        /* copy the coordinate frame matrix to the uniform memory in shader */
        gl.uniformMatrix4fv(modelUniform, false, coordFrame);

        /* binder the (vertex+color) buffer */
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vbuff);

        /* with the "packed layout"  (x,y,z,r,g,b),
         the stride distance between one group to the next is 24 bytes */
        gl.vertexAttribPointer(vertexAttr, 3, gl.FLOAT, false, 24, 0); /* (x,y,z) begins at offset 0 */
        gl.vertexAttribPointer(colorAttr, 3, gl.FLOAT, false, 24, 12); /* (r,g,b) begins at offset 12 */

        for (let k = 0; k < this.indices.length; k++) {
            let obj = this.indices[k];
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, obj.buffer);
            gl.drawElements(obj.primitive, obj.numPoints, gl.UNSIGNED_BYTE, 0);
        }
    }
}

