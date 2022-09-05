import { Component, OnInit } from "@angular/core";
import { GameEngine } from "../game-engine";

@Component({
  selector: "app-stepback",
  standalone: true,
  styleUrls: ["./stepback.component.scss"],
  templateUrl: "./stepback.component.html",
})
export class StepbackComponent {

  public constructor(private gameEngine: GameEngine) { }

  public stepback(): void {
    this.gameEngine.stepback();
  }

}
