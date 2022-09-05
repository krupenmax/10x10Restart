import {  Component } from "@angular/core";
import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { GameComponent } from "./play/game.component";
import { PopupWindowComponent } from "./pop-up-window/pop-up-window.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GameComponent, PopupWindowComponent],
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
