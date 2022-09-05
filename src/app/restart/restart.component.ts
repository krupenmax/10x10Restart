import { Component, OnInit } from "@angular/core";
import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-restart",
  standalone: true,
  styleUrls: ["./restart.component.scss"],
  templateUrl: "./restart.component.html",
})
export class RestartComponent  {

  public constructor(private cdr$: ChangeDetectorRef) { }


}
