import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenNewGameComponent } from './screen-new-game.component';

describe('ScreenNewGameComponent', () => {
  let component: ScreenNewGameComponent;
  let fixture: ComponentFixture<ScreenNewGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenNewGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenNewGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
