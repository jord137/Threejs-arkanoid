function Collision(ballpos, brickpos)
{
    if (ballpos.position.y >= (brickpos.position.y - 50) && ballpos.position.x >= (brickpos.position.x - 50) && ballpos.position.x <= brickpos.position.x + 50) //if the ball touches a brick
    {
        /*If the above paramaters become true then execute the following */

        CollisionSound.play();      //  play the collision sound
        if (brickpos.state === "normal")
        {
            brickpos.position.y = 1000; /* move the brickpos out of the playing field (although the brick is removed 
                                        from the scene this will prevent interaction with 'technically absent' collider of the previous brick
                                        */
            ball.velocityY = -10;       // rebound the ball vertically  
            scene.remove(brickpos);     //remove the brick from the scene

            counter.addToCurrentScore(1); // add 1 to the score if they break a normal brick
        }
        if (brickpos.state === "double")
        {
            ball.velocityY = -10;       // rebound the ball vertically 
            brickpos.state = "normal";
        }
       
    }
    if (ballpos.position.x >= 965)  //if the ball hits the right hand side of the screen, reverse it's velocity on the horizontal axis.
    {
        ball.velocityX = -10;       //reversal (shouldn't really be static (should be inverted velocityX really)
    }
    if (ballpos.position.y <= (paddle.position.y + 25) && ballpos.position.y >= (paddle.position.y - 25) && ballpos.position.x >=( paddle.position.x - 50) && ballpos.position.x <= paddle.position.x + 50)
    {
                                    /*this is currently redundant as the paddle collider is now updated inside of the paddle for single responsibility however i'm keeping it here as a backup.
                                    (slightly unprofessional i know but my internet is down so i can't access GIT) */
    }
    if ((ballpos.position.y + 25) >= (topWall.position.y - 20))
    {
        ball.velocityY = -10;
    }
    if (ballpos.position.x <= -945) //if the ball hits the left hand side of the screen, reverse it's velocity on the horizontal axis.
    {
        CollisionSound.play();      //play the collision sound.
        ball.velocityX = 10;        //Velocity reversed. (creates elastic bouncing effect.
        
    }
    if (ballpos.position.y <= paddle.position.y - 100) //if it's well under the paddle
    {
        ballpos.position.y = paddle.position.y - 50;
        DeathSound.play(); // play the death sound effect.
       // GameState = death;
    }
}