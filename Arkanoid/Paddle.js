function Paddle() { // Make a paddle class with a few variables
    this.speed = 0;
    this.width;
}

Paddle.prototype = new Cuboid(200, 50, 50, 0xffffff, true); // inherit from cuboid mesh
Paddle.constructor = Paddle; //constructor for paddle
Paddle.prototype.loadPaddle = function () //load paddle function is called in init()
{
    this.width = 200; //set the paddle.width
}
Paddle.prototype.CheckSideHit = function () // Checks to see if the paddle has collided with the left or right sides
{
    if ((paddle.position.x - 100) < leftWall.position.x + 20 ) { //left side collision
        paddle.position.x = (leftWall.position.x + 120);
        paddle.speed = 0;
    }

    if ((paddle.position.x + 100) > rightWall.position.x - 20) { //right side collision
        paddle.position.x = (rightWall.position.x - 120)
        paddle.speed = 0; 
    }
}

Paddle.prototype.CheckBallHit = function () //checks to see if the ball has hit the paddle
{
    if ((ball.position.y - 25) <= (paddle.position.y + 30) &&
        ((ball.position.y >= paddle.position.y - 30)) && (ball.position.x + 25) >=
        (paddle.position.x - (this.width / 2)) && (ball.position.x - 25) <=
        (paddle.position.x + (this.width / 2)))
    {
        if (ball.position.x >= paddle.position.x - 100 && ball.position.x < paddle.position.x)
        {
            
        }
        else if (ball.position.x <= paddle.position.x + 100 && ball.position.x > paddle.position.x)
        {
            ball.velocityX = 10 * (((ball.position.x - 25) - (paddle.position.x + 100)) / 200);
        }
        else
        {
            ball.velocityX = 10;
        }
         //X velocity = the balls position - the paddles position + half the width of paddle divided by paddle width
        ball.velocityY = -ball.velocityY; //invert velocity

    }     
}

Paddle.prototype.updater = function()
{
    this.position.x += this.speed;
    this.CheckSideHit();
    this.CheckBallHit();
}


