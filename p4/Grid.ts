import { Token } from "./Token"

export class Grid {
    grid: (Token | null)[][];
    column: number = 7;
    row: number = 6;

    constructor() {
        this.grid = [];
        for (let i = 0; i < this.row; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.column; j++) {
                this.grid[i][j] = null;
            }
        }
    }
    Play(token: Token, column: number): boolean {
        if (column >= this.column) {
            return false;
        }
        for (let row = this.row - 1; row >= 0; row--) {
            if (this.grid[row][column] === null) {
                this.grid[row][column] = token;
                return true;
            }
        }
        return false;
    }
Display(): void {
    console.log("Grille de jeu:");
    for (let i = 0; i < this.row; i++) {
        let display = "";
        
        for (let j = 0; j < this.column; j++) {
            if (this.grid[i][j] !== null) {
                if (this.grid[i][j]!.color === "yellow") {
                    display += "O ";
                } else {
                    display += "X ";
                }
            } else {
                display += ". ";
            }
        }
        console.log(display);
    }
    console.log("0 1 2 3 4 5 6");
}
}