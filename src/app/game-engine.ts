import { ISquare } from "./square";
import { Status } from "./status";

export class GameEngine {
  public isFirstMove = true;
  public isSecondMove = false;
  public squares: ISquare[];
  public prevX: number[] = [];
  public prevY: number[] = [];
  public knightX: number = 0;
  public knightY: number = 0;
  public moveCounter: number = 1;

  public constructor() {
    this.squares = [];
    for (let i: number = 0; i < 10; i++)
      for (let j: number = 0; j < 10; j++) {
        let square: ISquare = {
          counter: 0,
          status: Status.current,
          x: i,
          y: j,
        };
        this.squares.push(square);
      }
  }

  public getSquares(): ISquare[] {
    return this.squares;
  }

  public checkForFirstMove(): boolean {
    return this.isFirstMove;
  }

  public checkForSecondMove(): boolean {
    return this.isSecondMove;
  }

  public clicked(i: number): void {
    if (this.isFirstMove == true || this.squares[i].status == Status.toMove) {
      if (this.isSecondMove == true && this.squares[i].status == Status.toMove) {
        this.isSecondMove = false;
      }
      if (this.isToMove(i) == true) {
        this.prevX.push(this.knightX);
        this.prevY.push(this.knightY);
      }
      if (this.isToMove(i) == true) {
        this.squares[i].status = Status.knight;
        this.findByCoordinates(this.knightX, this.knightY).status = Status.enemy;
        this.knightX = this.squares[i].x;
        this.knightY = this.squares[i].y;
        this.squares[i].counter = this.moveCounter;
        this.moveCounter++;
        this.changeToUnMoveTo();
        this.changeToPicked(this.squares[i].x, this.squares[i].y);
      }
      else {
        if (this.isFirstMove) {
          for (let i: number = 0; i < 100; i++) {
            this.squares[i].status = Status.none;
          }
        }
        this.squares[i].status = Status.knight;
        this.knightX = this.squares[i].x;
        this.knightY = this.squares[i].y;
        this.squares[i].counter = this.moveCounter;
        this.moveCounter++;
        this.isFirstMove = false;
        this.isSecondMove = true;
        this.changeToPicked(this.squares[i].x, this.squares[i].y);
      }
    }
  }


  public stepback(): void {
    if (this.isFirstMove == false && this.isSecondMove == false && this.knightX != this.prevX[this.prevX.length] && this.knightY != this.prevY[this.prevY.length]) {
      if (this.prevX.length >= 1) {
        this.changeToUnMoveTo();
        this.findByCoordinates(this.knightX, this.knightY).status = Status.none;
        this.knightX = this.prevX[this.prevX.length - 1];
        this.prevX.splice(this.prevX.length - 1, 1);
        this.knightY = this.prevY[this.prevY.length - 1];
        this.prevY.splice(this.prevY.length - 1, 1);
        this.changeToPicked(this.prevX[this.prevX.length], this.prevY[this.prevY.length]);
        this.findByCoordinates(this.knightX, this.knightY).status = Status.knight;
        this.changeToPicked(this.knightX, this.knightY);
        this.moveCounter--;
      }
    }
  }

  public restart(): void {
    for (let i: number = 0; i < 100; i++) {
      this.squares[i].status = Status.none;
    }
    this.prevX.splice(0, this.prevX.length);
    this.prevY.splice(0, this.prevX.length);
    this.isFirstMove = true;
    this.moveCounter = 1;
  }

  public checkForWin(): boolean {
    let isWin: boolean = true;
    for (let i: number = 0; i < 100; i++) {
      if (this.squares[i].status != Status.enemy) {
        isWin = false;
      }
    }
    return isWin;
  }

  public getIndex(x:number, y: number): number {
    let numberBack: number = 0;
    for (let i: number = 0; i < 100; i++) {
      if (this.squares[i].x == x && this.squares[i].y == y) {
        numberBack = i;
      }
    }
    return numberBack;
  }

  public checkForLose(): Boolean {
    let x: number = 0;
    let y: number = 0;
    for (let i: number = 0; i < 100; i++) {
      if (this.squares[i].status == Status.knight) {
        x = this.squares[i].x;
        y = this.squares[i].y;
      }
    }
    if (this.checkForWin() == false) {
      if (this.findByCoordinates(x, y).status == Status.knight) {
        let isLost: Boolean = true;
        if (x - 2 >= 0 && y + 1 <= 9) {
          if (this.findByCoordinates(x - 2, y + 1).status != Status.enemy) {
            isLost = false;
          }
        }
        if (x - 1 >= 0 && y + 2 <= 9) {
          if (this.findByCoordinates(x - 1, y + 2).status != Status.enemy) {
            isLost = false;
          }
        }
        if (x - 2 >= 0 && y - 1 >= 0) {
          if (this.findByCoordinates(x - 2, y - 1).status != Status.enemy) {
            isLost = false;
          }
        }
        if (x - 1 >= 0 && y - 2 >= 0) {
          if (this.findByCoordinates(x - 1, y - 2).status != Status.enemy) {
            isLost = false;
          }
        }
        if (x + 2 <= 9 && y + 1 <= 9) {
          if (this.findByCoordinates(x + 2, y + 1).status != Status.enemy) {
            isLost = false;
          }
        }
        if (x + 1 <= 9 && y + 2 <= 9) {
          if (this.findByCoordinates(x + 1, y + 2).status != Status.enemy) {
            isLost = false;
          }
        }
        if (x + 2 <= 9 && y - 1 >= 0) {
          if (this.findByCoordinates(x + 2, y - 1).status != Status.enemy) {
            isLost = false;
          }
        }
        if (x + 1 <= 9 && y - 2 >= 0) {
          if (this.findByCoordinates(x + 1, y - 2).status != Status.enemy) {
            isLost = false;
          }
        }
        return isLost;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }

  public findByCoordinates(x: number, y: number): ISquare {
    for (let i: number = 0; i < 100; i++) {
      if (this.squares[i].x == x && this.squares[i].y == y) {
        return this.squares[i];
      }
    }
    return this.squares[0];
  }

  public changeToPicked(x: number, y: number): void {
    if (y + 1 <= 9 && x - 2 >= 0 &&  this.findByCoordinates(x - 2, y + 1).status != Status.enemy)
      this.findByCoordinates(x - 2, y + 1).status = Status.toMove;

    if (y + 2 <= 9 && x - 1 >= 0 && this.findByCoordinates(x - 1, y + 2).status != Status.enemy)
      this.findByCoordinates(x - 1, y + 2).status = Status.toMove;

    if (y - 1 >= 0 && x - 2 >= 0 && this.findByCoordinates(x - 2, y - 1).status != Status.enemy)
      this.findByCoordinates(x - 2, y - 1).status = Status.toMove;

    if (y - 2 >= 0 && x - 1 >= 0 && this.findByCoordinates(x - 1, y - 2).status != Status.enemy)
      this.findByCoordinates(x - 1, y - 2).status = Status.toMove;

    if (y + 1 <= 9 && x + 2 <= 9 && this.findByCoordinates(x + 2, y + 1).status != Status.enemy)
      this.findByCoordinates(x + 2, y + 1).status = Status.toMove;

    if (y + 2 <= 9 && x + 1 <= 9 && this.findByCoordinates(x + 1,y + 2).status != Status.enemy)
      this.findByCoordinates(x + 1,y + 2).status = Status.toMove;

    if (y - 1 >= 0 && x + 2 <= 9 && this.findByCoordinates(x + 2, y - 1).status != Status.enemy)
      this.findByCoordinates(x + 2, y - 1).status = Status.toMove;

    if (y - 2 >= 0 && x + 1 <= 9 && this.findByCoordinates(x + 1, y - 2).status != Status.enemy)
      this.findByCoordinates(x + 1, y - 2).status = Status.toMove;

  }

  public changeToUnMoveTo(): void {
    for (let i: number = 0; i < 100; i++) {
      if (this.squares[i].status == Status.toMove) {
        this.squares[i].status = Status.none;
      }
    }
  }

  public isStartPosition(i: number) : boolean {
    if (this.squares[i].status == Status.knight) {
      return true;
    }
    else {
      return false;
    }
  }

  public isEnemy(i: number): boolean {
    if (this.squares[i].status == Status.enemy) {
      return true;
    }
    else {
      return false;
    }
  }

  public isToMove(i: number): boolean {
    if (this.squares[i].status == Status.toMove) {
      return true;
    }
    else {
      return false;
    }
  }

  public isKnight(i: number): boolean {
    if (this.squares[i].status == Status.knight) {
      return true;
    }
    else {
      return false;
    }
  }
}
