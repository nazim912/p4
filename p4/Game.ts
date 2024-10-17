import { Grid } from "./Grid";
import { Token } from "./Token";

class Game{
    grid:Grid;
    player:Token;
    constructor(){
        this.grid=new Grid()
        this.player=new Token("red")
    }
Tour():void{
    if (this.player.color === "yellow") {
        this.player = new Token("red");
    } else {
        this.player = new Token("yellow");
    }
}
Play(column:number):void{
    if(this.grid.Play(this.player,column)){
        this.grid.Display();
        this.Tour();
    }
}

}
const game =new Game
game.Play(1)
game.Play(2)
game.Play(3)
game.Play(3)
game.Play(3)
game.Play(3)