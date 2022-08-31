import { Injectable } from '@angular/core';
import { square } from './square';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public squares: square[];
  constructor() {
    this.squares = new Array();
    for (let i: number = 0; i < 10; i++)
    for (let j: number = 0; j < 10; j++)
    {
        let square: square = { 
            x: i,
            y: j,
            isSelected: false,
            isToMove: false,
            isEnemy: false,
            isKnight: false,
            counter: 0,
        }
        this.squares.push(square);
    }

   }

   public getSquares(): square[] {
    return this.squares;
   }
}
