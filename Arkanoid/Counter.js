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

Counter.prototype.getCurrentScore = function ()
{
    return this.currentscore;
}
Counter.prototype.getMaxScore = function()
{
    return this.maxscore;
}
Counter.prototype.addToCurrentScore = function (add)
{
    return this.currentscore += add;
}

Counter.prototype.setup = function ()
{
    if (this.maxscore === 0)
    {
        this.maxscore = BricksArray.length;
    }
}
Counter.prototype.onGUI = function ()
{
    scoreHtml.innerHTML = "score: " + this.getCurrentScore() + "/ " + this.getMaxScore();
}
Counter.constructor = Counter;
