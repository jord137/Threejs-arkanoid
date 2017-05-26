function Levels()
{
    this.currentlevel = 1;
}
Levels.prototype.setCurrentLevel = function(lv)
{
    this.currentlevel = lv;
}
Levels.prototype.loadLevel = function(levelnumber)
{
   
    switch (levelnumber)
    {
        case 1: // level 1
            
            for (r1 = 0; r1 < 10; r1++) {
                BricksArray[r1] = brick.clone();
                BricksArray[r1].position.x = (((-950 + 20) / 2.3) + (r1 * 91));
                BricksArray[r1].state = "normal";
                scene.add(BricksArray[r1]);
            }
            for (r2 = 0; r2 < 8; r2++)
            {
                BricksArray[r2 + 10] = brick.clone();
                BricksArray[r2 + 10].position.x = (((-950 + 160) / 2.5) + (r2 * 91));
                BricksArray[r2 + 10].position.y = (440 - (1 * 91));
                BricksArray[r2 + 10].state = "normal";
                scene.add(BricksArray[r2 + 10]);
            }
            for (r3 = 0; r3 < 4; r3++) {
                BricksArray[r3 + 18] = brick.clone();
                BricksArray[r3 + 18].position.x = (-140 + (r3 * 91));
                BricksArray[r3 + 18].position.y = (440 - (2 * 91));
                BricksArray[r3 + 18].state = "double";
                scene.add(BricksArray[r3 + 18]);
            }
            break;
        case 2: //level 2
            for (x = 0; x < 23; x++) //loops 23 times in order to draw a row, with each iteration all three rows are drawn
            {

                BricksArray[x] = brick.clone();// Row one Add to array
                BricksArray[x].position.x = (-950 + (x * 85)); // row one set X position

                BricksArray[x + 23] = brick.clone(); //Row two Clone
                BricksArray[x + 23].position.x = (-950 + (x * 85)); // Row two set x
                BricksArray[x + 23].position.y = (440 - (1 * 85)); // Row two set y

                BricksArray[x + 46] = brick.clone(); //Row three Clone
                BricksArray[x + 46].position.x = (-950 + (x * 85)); // Row three set x
                BricksArray[x + 46].position.y = (440 - (2 * 85)); // Row three set y

                scene.add(BricksArray[x]); // add row one two scene
                scene.add(BricksArray[x + 23]); //add row two to scene
                scene.add(BricksArray[x + 46]); // add row three to scene
            }
            for (i = 0; i < 23; i++)
            {
                BricksArray[i].state = "double";
            }
            for (i = 23; i < BricksArray.length; i++)
            {
                BricksArray[i].state = "normal";
            }
            break;
    }
       
}
Levels.constructor = Levels;