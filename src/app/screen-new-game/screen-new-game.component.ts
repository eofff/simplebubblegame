import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

import { GameLogicService } from '../game-logic.service';

@Component({
  selector: 'app-screen-new-game',
  templateUrl: './screen-new-game.component.html',
  styleUrls: ['./screen-new-game.component.scss']
})
export class ScreenNewGameComponent implements OnInit {

  constructor(private gameLogicService: GameLogicService) { }

  ngOnInit(): void {
  }

  newGameClick(): void {
    this.gameLogicService.setActiveScene("main");
  }

}
