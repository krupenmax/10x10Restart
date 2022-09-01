import { CommonModule } from "@angular/common";
import {  Component } from "@angular/core";
import { RestartComponent } from "./restart/restart.component";
import { SquaresComponent } from "./squares/squares.component";
import { StepbackComponent } from "./stepback/stepback.component";

@Component({
  imports: [SquaresComponent, CommonModule, StepbackComponent, RestartComponent],
  selector: "app-root",
  standalone: true,
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  protected title = "10x10";
}
