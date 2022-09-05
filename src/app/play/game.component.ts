import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { GameEngine } from "../game-engine";
import { PopupWindowComponent } from "../pop-ip-window/pop-up-window.component";
import { RestartComponent } from "../restart/restart.component";
import { ISquare } from "../square";
import { SquareCellComponent } from "../square-cell/square-cell.component";
import { StepbackComponent } from "../stepback/stepback.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StepbackComponent, RestartComponent, CommonModule, SquareCellComponent, PopupWindowComponent],
  providers: [GameEngine],
  selector: "app-game",
  standalone: true,
  styleUrls: ["./game.component.scss"],
  templateUrl: "./game.component.html",
})
export class GameComponent {
  public squares: ISquare[] = [];
  public isLose: Boolean = false;
  public isWin: Boolean = false;

  public constructor(private gameEngine: GameEngine, private cdr$: ChangeDetectorRef) {
    this.squares = this.gameEngine.getSquares();
  }

  public getIsEnemy(i: number): boolean {
    return this.gameEngine.isEnemy(i);
  }

  public getIsToMove(i: number): boolean {
    return this.gameEngine.isToMove(i);
  }

  protected trackByFn(index: number, item: ISquare): number {
    return index;
  }

  public getCounter(i: number): number {
    return this.squares[i].counter;
  }

  public getStatus(i: number) {
    return this.squares[i].status;
  }

  public clicked(index: number): void {
    this.gameEngine.clicked(index);
    this.cdr$.detectChanges();
  }

  public checkGameOver(): boolean {
    this.isLose = this.gameEngine.checkForLose();
    this.isWin = this.gameEngine.checkForWin();
    if (this.isWin == true || this.isLose == true) {
      return true;
    }
    else {
      return false;
    }
  }

}
