function Cuboid(width,height,depth,color,wireframe)
{
    

        this.geometry = new THREE.BoxGeometry(width, height, depth);
        this.material = new THREE.MeshBasicMaterial(
            {
                color: color,
                wireframe: wireframe
            }
            );

        THREE.Mesh.call(this, this.geometry, this.material);

       
        
}

Cuboid.prototype = Object.create(THREE.Mesh.prototype);
Cuboid.prototype.constructor = Cuboid;

Cuboid.prototype.getMesh = function () {

    return this.mesh;

}