import { CommonModule } from "@angular/common";
import { Component, Input  } from "@angular/core";

@Component({
  imports: [CommonModule],
  selector: "app-square-cell",
  standalone: true,
  styleUrls: ["./square-cell.component.scss"],
  templateUrl: "./square-cell.component.html",
})
export class SquareCellComponent {
  @Input() public isEnemy = false;
  @Input() public isMoveTo = false;
  @Input() public isKnight = false;
  public constructor() { }

  public showAsEnemy(): boolean {
    return this.isEnemy;
  }

  public showAsKnight(): boolean {
    return this.isKnight;
  }

  public showAsMoveTo(): boolean {
    return this.isMoveTo;
  }

}
