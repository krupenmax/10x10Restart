import { Injectable } from "@angular/core";
import { square } from "./square";

@Injectable({
  providedIn: "root",
})
export class GameService {
  public squares: square[];
  public constructor() {
    this.squares = new Array();
    for (let i: number = 0; i < 10; i++)
      for (let j: number = 0; j < 10; j++) {
        let square: square = {
          counter: 0,
          isEnemy: false,
          isKnight: false,
          isSelected: false,
          isToMove: false,
          x: i,
          y: j,
        };
        this.squares.push(square);
      }

  }

  public getSquares(): square[] {
    return this.squares;
  }
}
