function BottomWall(width) {

}
BottomWall.prototype = new Cuboid(2000 || width, 40, 20, 0xd3d3d3, true);
BottomWall.prototype.position.y = -500;