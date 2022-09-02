import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { gameEngine } from "../game-engine";
import { GameService } from "../game.service";
import { square } from "../square";

@Component({
  imports: [CommonModule],
  providers: [gameEngine],
  selector: "app-squares",
  standalone: true,
  styleUrls: ["./squares.component.scss"],
  templateUrl: "./squares.component.html",
})
export class SquaresComponent implements OnInit {

  public constructor(private gameService: GameService, private gameEngines: gameEngine) {
  }

  public getSquares(): square[] {
    return this.gameService.getSquares();
  }

  public ngOnInit(): void {
    console.log("");
  }

}
