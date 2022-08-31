import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { square } from '../square';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SquaresComponent implements OnInit {

  constructor(private gameService: GameService) { }

  public getSquares(): square[] {
    return this.gameService.getSquares();
  }

  ngOnInit(): void {
  }

}
