
function Ball()
{
    this.state;          //Balls state (will be used for ball types.
    this.velocityX = 10; //start velocity X
    this.velocityY = 10; //start velocity Y
    this.speed;          // public speed variable
}
Ball.prototype = new Cuboid(50, 50, 50, 0xffffff, true);
Ball.constructor = Ball;
Ball.prototype.LoadBall = function () // Ball initialize/load function
{
    this.state = "normal";
    this.speed = 1;
}
Ball.prototype.update = function () //Balls update Velocity
{
    this.position.y += (this.velocityY * this.speed);
    this.position.x += (this.velocityX * this.speed);
    
    switch (this.state)
    {
        case "normal":
            this.speed = 1;
            break;
    }
}
