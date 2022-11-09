import { Component, OnInit } from '@angular/core';
import { GameState } from '../dtos/GameState';
import { GameLogicService } from '../game-logic.service';

@Component({
  selector: 'app-screen-main',
  templateUrl: './screen-main.component.html',
  styleUrls: ['./screen-main.component.scss']
})
export class ScreenMainComponent implements OnInit {
  hpCount: number = 0;
  bubblePositionX: string = "0%";
  bubblePositionY: string = "0%";
  bubbleSizeX: string = "30px";
  bubbleSizeY: string = "30px";

  constructor(private gameLogicService: GameLogicService) { }

  ngOnInit(): void {
    this.gameLogicService.getGameState().subscribe((state: GameState) => {
      this.hpCount = state.HpCount;
      this.bubblePositionX = `calc(${state.BubblePositionX}% - ${state.BubbleSizeX / 2}px)`;
      this.bubblePositionY = `calc(${state.BubblePositionY}% - ${state.BubbleSizeY / 2}px)`;
      this.bubbleSizeX = `${state.BubbleSizeX}px`;
      this.bubbleSizeY = `${state.BubbleSizeY}px`;
    });
  }
}
