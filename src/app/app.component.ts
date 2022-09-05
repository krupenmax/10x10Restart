import {  Component } from "@angular/core";
import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { GameComponent } from "./play/game.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GameComponent],
  selector: "app-root",
  standalone: true,
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  public constructor(private cdr$: ChangeDetectorRef) {

  }
  protected title = "10x10";
}
