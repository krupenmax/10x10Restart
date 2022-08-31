import { CommonModule } from '@angular/common';
import { ApplicationModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SquaresComponent } from './squares/squares.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [SquaresComponent, CommonModule]
})
export class AppComponent {
  title = '10x10';
}
