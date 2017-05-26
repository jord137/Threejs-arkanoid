function Input(e)
{
  
    if (e.keyCode == '37')
    {
        paddle.speed = -30;
    }
     if (e.keyCode == '39')
    {
         paddle.speed = 30;
     }

}
function EndMove() {
    paddle.speed = 0;
}
