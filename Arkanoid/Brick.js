function Brick() // Brick class
{
    this.state;
    this.health;
    this.color;
    
}

Brick.prototype = new Cuboid(80, 80, 80, this.color, true);
Brick.prototype.constructor = Brick;
Brick.prototype.position.y = 440;


