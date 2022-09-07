import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
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
  public isLose: Boolean = false;
  public isWin: Boolean = false;
  public state: BehaviorSubject<GameState> = this.gameEngine.state;

  public constructor(private gameEngine: GameEngine, private cdr: ChangeDetectorRef) {

  }

  protected trackByFn(index: number, item: Square): number {
    return index;
  }

  public move(index: number): void {
    this.gameEngine.move(index);
    this.cdr.detectChanges();
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
