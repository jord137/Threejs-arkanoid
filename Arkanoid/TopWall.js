function TopWall(width) {

}
TopWall.prototype = new Cuboid(2000 || width, 40, 20, 0xd3d3d3, true);
TopWall.prototype.position.y = 500;