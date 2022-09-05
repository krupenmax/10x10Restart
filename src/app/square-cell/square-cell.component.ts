import { CommonModule } from "@angular/common";
import { Component, Input  } from "@angular/core";
import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  @Input() public currentCondition = "";
  public constructor(private cdr$: ChangeDetectorRef) { }

  public showAsEnemy(): boolean {
    return this.isEnemy;
  }

  public showAsKnight(): boolean {
    return this.isKnight;
  }

  public showAsMoveTo(): boolean {
    return this.isMoveTo;
  }

  public getCurrentCondition(): string {
    return this.currentCondition;
  }

}
