import {  Component } from "@angular/core";
import { PlayComponent } from "./play/play.component";

@Component({
  imports: [PlayComponent],
  selector: "app-root",
  standalone: true,
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  protected title = "10x10";
}
