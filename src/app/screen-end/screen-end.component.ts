import { Component, OnInit } from '@angular/core';
import { GameState } from '../dtos/GameState';
import { GameLogicService } from '../game-logic.service';

@Component({
  selector: 'app-screen-end',
  templateUrl: './screen-end.component.html',
  styleUrls: ['./screen-end.component.scss']
})
export class ScreenEndComponent implements OnInit {
  score: number = 0;

  constructor(private gameLogicService: GameLogicService) { }

  ngOnInit(): void {
    this.gameLogicService.getGameState().subscribe((value: GameState) => {
      this.score = value.Scores;
    })
  }

}
