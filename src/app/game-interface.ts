import { Observable } from "rxjs";
import { GameState } from "./game-state";
import { Square } from "./square";

export interface GameInterface {
  move(index: number): void;
  getSquares(): Square[];
  checkForFirstMove(): boolean;
  checkForSecondMove(): boolean;
  stepback(): void;
  restart(): void;
  checkForWin(): boolean;
  getIndex(x:number, y: number): number;
  checkForLose(): Boolean;
  findByCoordinates(x: number, y: number): Square;
  changeToPicked(x: number, y: number): void;
  changeToUnMoveTo(): void;
  isStartPosition(i: number) : boolean;
  isEnemy(i: number): boolean;
  isToMove(i: number): boolean;
  isToknight(i: number): boolean;
  state: Observable<GameState>;
}
