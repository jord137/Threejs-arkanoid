function Wall(height) {

}
Wall.prototype = new Cuboid(40 || height, 1000, 20, 0xd3d3d3, true);