import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { GameEngine } from "../game-engine";
import { RestartComponent } from "../restart/restart.component";
import { ISquare } from "../square";
import { SquareCellComponent } from "../square-cell/square-cell.component";
import { StepbackComponent } from "../stepback/stepback.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StepbackComponent, RestartComponent, CommonModule, SquareCellComponent],
  providers: [GameEngine],
  selector: "app-game",
  standalone: true,
  styleUrls: ["./game.component.scss"],
  templateUrl: "./game.component.html",
})
export class GameComponent {
  public squares: ISquare[] = [];

  public constructor(private gameEngine: GameEngine, private cdr$: ChangeDetectorRef) {
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

  public trackByFn(index: number, item: ISquare): number {
    return index;
  }

}
