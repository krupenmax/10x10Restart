import { Component, OnInit } from "@angular/core";
import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { GameEngine } from "../game-engine";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-restart",
  standalone: true,
  styleUrls: ["./restart.component.scss"],
  templateUrl: "./restart.component.html",
})
export class RestartComponent  {

  public constructor(private cdr$: ChangeDetectorRef, private gameEngine: GameEngine) { }

  public restart(): void {
    this.gameEngine.restart();
  }


}
