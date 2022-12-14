import { Square } from "./square";

export interface GameState {
  squares: Square[];
  moveCounter: number;
  isWin: boolean;
  isLose: boolean;
}
