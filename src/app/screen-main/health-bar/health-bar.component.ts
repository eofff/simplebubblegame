import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.scss']
})
export class HealthBarComponent implements OnInit {
  @Input() public hpCount!: number;

  constructor() { }

  ngOnInit(): void {
  }

  getHpIterator(): Array<number> {
    let returned: Array<number> = new Array<number>();

    for (let i: number = 0; i < this.hpCount; i++) {
      returned.push(0);
    }

    return returned;
  }

}
