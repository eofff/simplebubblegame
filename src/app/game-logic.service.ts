import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { GameState } from './dtos/GameState';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {
  private _gameStateValue: GameState = new GameState();
  private _gameState: Observable<GameState>;

  private _beginSize = 30;
  private _speed: number = 0.5;
  private _acceleration: number = 0.1;
  private _maxBubbleSize: number = 300;

  constructor() {
    this._gameStateValue.BubbleSizeX = this._beginSize;
    this._gameStateValue.BubbleSizeY = this._beginSize;

    this._gameState = new Observable((observer: Observer<GameState>): void => {
      setInterval(() => {
        if (this._gameStateValue.ActiveScene == "main") {
          this._gameStateValue.BubbleSizeX += this._speed;
          this._gameStateValue.BubbleSizeY += this._speed;
        }

        if (this._gameStateValue.BubbleSizeX > this._maxBubbleSize || this._gameStateValue.BubbleSizeX > this._maxBubbleSize)
        {
          this._gameStateValue.HpCount -= 1;
          this.randomBubble();
        }

        if (this._gameStateValue.HpCount <= 0) {
          this._gameStateValue.ActiveScene = "end";
        }

        observer.next(this._gameStateValue);
      }, 33);
    });
  }
  
  public getGameState() : Observable<GameState> {
    return this._gameState;
  }

  public setActiveScene(value: string) : void {
    this._gameStateValue.ActiveScene = value;
  }

  public popBubble() : void {
    this._gameStateValue.Scores += 1;
    this._speed += this._acceleration;
    this.randomBubble();
  }

  private randomBubble() : void {
    this._gameStateValue.BubblePositionX = this.getRandomInt(10, 90);
    this._gameStateValue.BubblePositionY = this.getRandomInt(10, 90);
    this._gameStateValue.BubbleSizeX = this._beginSize;
    this._gameStateValue.BubbleSizeY = this._beginSize;
  }

  private getRandomInt(min:number, max: number) : number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
