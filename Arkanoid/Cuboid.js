function Cuboid(width,height,depth,color,wireframe) //this is the base class from which every 3D object inherits from.
{
        this.geometry = new THREE.BoxGeometry(width, height, depth); //set the geometry
        this.material = new THREE.MeshBasicMaterial( //set the material
            {
                color: color, //material color
                wireframe: wireframe // is wireframe? true or false
            }
            );

        THREE.Mesh.call(this, this.geometry, this.material); // add the geometry and material to the mesh       
}

Cuboid.prototype = Object.create(THREE.Mesh.prototype); // set the prototype as a THREE.Mesh.prototype
Cuboid.prototype.constructor = Cuboid; //set the constructor to be the main Cuboid class

Cuboid.prototype.getMesh = function () { //getmesh method, returns mesh

    return this.mesh;

}