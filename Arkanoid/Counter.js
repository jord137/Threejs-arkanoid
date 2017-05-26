function Counter()
{
     this.currentscore;
     this.maxscore;
    
    if(this.currentscore == null)
    {
        this.currentscore = 0;
    }
    if(this.maxscore == null)
    {
        this.maxscore = 0;
    }
}

Counter.prototype.getCurrentScore = function () //get current score 
{
    return this.currentscore;
}
Counter.prototype.getMaxScore = function() //get maximum sxore
{
    return this.maxscore;
}
Counter.prototype.addToCurrentScore = function (add) //adds the number passed to the current score e.g. .addToCurrentScore(2) would add 2.
{
    return this.currentscore += add;
}

Counter.prototype.setup = function () //Setup / initialise function sets the maximum score to the bricks inside the array.
{
    if (this.maxscore === 0)
    {
        this.maxscore = BricksArray.length;
    }
}
Counter.prototype.onGUI = function () // I plan to make the score 3D Text hence 'GUI' however it currently uses a <P> tag to display currentscore/maxscore
{
    scoreHtml.innerHTML = "score: " + this.getCurrentScore() + "/ " + this.getMaxScore();
}
Counter.constructor = Counter; //constructor
