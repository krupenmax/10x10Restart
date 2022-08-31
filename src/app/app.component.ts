import { ApplicationModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SquaresComponent } from './squares/squares.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [SquaresComponent]
})
export class AppComponent {
  title = 'Restart';
}
