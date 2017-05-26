
function Ball()
{
    this.state;
    this.velocityX = 10;
    this.velocityY = 10;
    this.speed;
}
Ball.prototype = new Cuboid(50, 50, 50, 0xffffff, true);
Ball.constructor = Ball;
Ball.prototype.LoadBall = function ()
{
    this.state = "normal";
    this.speed = 1;
}
Ball.prototype.update = function ()
{
//    if (ball.velocityY > 10)
//    {
//        ball.velocityY = 10;
//    }
    this.position.y += (this.velocityY * this.speed);
    this.position.x += (this.velocityX * this.speed);
    
    switch (this.state)
    {
        case "normal":
            this.speed = 1;
    }
}
