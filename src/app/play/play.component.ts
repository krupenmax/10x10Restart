import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { GameEngine } from "../game-engine";
import { RestartComponent } from "../restart/restart.component";
import { square } from "../square";
import { SquareCellComponent } from "../square-cell/square-cell.component";
import { StepbackComponent } from "../stepback/stepback.component";

@Component({
  imports: [StepbackComponent, RestartComponent, CommonModule, SquareCellComponent],
  providers: [GameEngine],
  selector: "app-play",
  standalone: true,
  styleUrls: ["./play.component.scss"],
  templateUrl: "./play.component.html",
})
export class PlayComponent {
  public squares: square[] = [];

  public constructor(private gameEngine: GameEngine) {
    this.squares = this.gameEngine.getSquares();
  }

  public getIsEnemy(i: number): boolean {
    return this.gameEngine.isEnemy(i);
  }

  public getIsKnight(i: number): boolean {
    return this.gameEngine.isKnight(i);
  }

  public getIsToMove(i: number): boolean {
    return this.gameEngine.isToMove(i);
  }

}
