import { Component, OnInit, Input } from '@angular/core';
import { GameLogicService } from '../../game-logic.service';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit {
  @Input() posX: string = "";
  @Input() posY: string = "";
  @Input() sizeX: string = "";
  @Input() sizeY: string = "";

  constructor(private gameLogicService: GameLogicService) { }

  ngOnInit(): void {
  }

  pop() : void {
    this.gameLogicService.popBubble();
  }
}
