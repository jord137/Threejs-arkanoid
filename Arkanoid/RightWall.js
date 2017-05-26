function RightWall(width) {

}
RightWall.prototype = new Cuboid(40 || width, 1000, 20, 0xd3d3d3, true);
RightWall.prototype.position.x = 1000;