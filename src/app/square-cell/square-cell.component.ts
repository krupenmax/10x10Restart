import { CommonModule } from "@angular/common";
import { Component, Input  } from "@angular/core";
import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Status } from "../status";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  selector: "app-square-cell",
  standalone: true,
  styleUrls: ["./square-cell.component.scss"],
  templateUrl: "./square-cell.component.html",
})
export class SquareCellComponent {
  @Input() public status: string = "";
  @Input() public counter = 0;
  public constructor(private cdr$: ChangeDetectorRef) {
  }

  public showAsEnemy(): boolean {
    if (this.status === "isEnemy") {
      return true;
    }
    else {
      return false;
    }
  }

  public showAsKnight(): boolean {
    if (this.status === "isKnight") {
      return true;
    }
    else {
      return false;
    }
  }

  public showAsMoveTo(): boolean {
    if (this.status == "isToMove") {
      return true;
    }
    else {
      return false;
    }
  }


}
