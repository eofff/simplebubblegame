import { Component, OnInit } from '@angular/core';

import { GameLogicService } from '../game-logic.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  activeScene: string = "";

  constructor(private gameLogicService: GameLogicService) { }

  ngOnInit(): void {
    this.gameLogicService.getGameState().subscribe((value) => {
      this.activeScene = value.ActiveScene;
    });
  }

}
