function LeftWall() {
    this.width
}
LeftWall.prototype = new Cuboid(40 || this.width, 1000, 20, 0xd3d3d3, true);
LeftWall.constructor = LeftWall;
LeftWall.prototype.position.x = -1000;