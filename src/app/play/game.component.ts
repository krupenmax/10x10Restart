import { state } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { GameEngine } from "../game-engine";
import { GameState } from "../game-state";
import { PopupWindowComponent } from "../pop-up-window/pop-up-window.component";
import { Square } from "../square";
import { SquareCellComponent } from "../square-cell/square-cell.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SquareCellComponent, PopupWindowComponent],
  providers: [GameEngine],
  selector: "app-game",
  standalone: true,
  styleUrls: ["./game.component.scss"],
  templateUrl: "./game.component.html",
})
export class GameComponent {
  public squares: Square[] = [];
  public isLose: Boolean = false;
  public isWin: Boolean = false;
  public gameState: GameState = {
    moveCounter: 0,
    squares: this.squares,
  };

  public constructor(private gameEngine: GameEngine, private cdr$: ChangeDetectorRef) {
    this.squares = this.gameEngine.getSquares();
    this.getState();
  }

  public getIsEnemy(i: number): boolean {
    return this.gameEngine.isEnemy(i);
  }

  public getIsToMove(i: number): boolean {
    return this.gameEngine.isToMove(i);
  }

  protected trackByFn(index: number, item: Square): number {
    return index;
  }

  public getCounter(i: number): number {
    return this.gameState?.squares[i].counter;
  }

  public getState(): void {
    this.gameEngine.getState()?.subscribe(gameState => this.gameState = gameState);
  }

  public getStatus(i: number) {
    return this.gameState?.squares[i].status;
  }

  public clicked(index: number): void {
    this.gameEngine.move(index);
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

  public restart(): void {
    this.gameEngine.restart();
  }

  public stepback(): void {
    this.gameEngine.stepback();
  }

}
