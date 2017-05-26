function Input(e) //basic input handling using keycodes.
{
  
    if (e.keyCode == '37') //left key
    {
        paddle.speed = -30; //paddle speeds aren't dynamic at the moment.
    }
     if (e.keyCode == '39') //right key
    {
         paddle.speed = 30; 
     }

}
function EndMove() { //on key up this function is called to prevent the paddle 'auto moving'.
    paddle.speed = 0;
}
