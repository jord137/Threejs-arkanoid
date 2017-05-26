function GameMath()
{

}

GameMath.prototype.Slope = function (ball, brick)
{
    if (ball.posiion.x = brick.position.x)
    {
        return null;
    }

    return ((brick.position.y - ball.position.y) / (brick.position.x - ball.position.x));
}

GameMath.prototype.Intercept = function (ball, slope)
{
    if (slope === null)
    {
        return ball.x;
    }

    return (ball.y - (slope * ball.x));
}

GameMath.prototype.Gradient = Slope(Ball, Brick)