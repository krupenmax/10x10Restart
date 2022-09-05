import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Component, Input, OnInit } from "@angular/core";
import { GameEngine } from "../game-engine";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-pop-up-window",
  standalone: true,
  styleUrls: ["./pop-up-window.component.scss"],
  templateUrl: "./pop-up-window.component.html",
})
export class PopupWindowComponent implements OnInit {
  public centerMessage: string = "";
  public upperMessage: string = "";
  public buttonMessage: string = "";
  @Input() public isLose?: Boolean;
  @Input() public isWin?: Boolean;
  public constructor(private gameEngine: GameEngine, private cdr$: ChangeDetectorRef) {
  }

  public restart() {
    this.gameEngine.restart();
  }

  public ngOnInit(): void {
    if (this.isLose) {
      this.centerMessage = "You lose!";
      this.upperMessage = "SORRY!";
      this.buttonMessage = "TRY AGAIN";
    }
    if (this.isWin) {
      this.centerMessage = "You are WINNER!";
      this.upperMessage = "CONGRATS!";
      this.buttonMessage = "RESTART";
    }

  }
}
