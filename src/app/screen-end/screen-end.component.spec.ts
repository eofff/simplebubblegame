import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenEndComponent } from './screen-end.component';

describe('ScreenEndComponent', () => {
  let component: ScreenEndComponent;
  let fixture: ComponentFixture<ScreenEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
