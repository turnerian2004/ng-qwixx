import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBoardButtonsComponent } from './player-board-buttons.component';

describe('PlayerBoardButtonsComponent', () => {
  let component: PlayerBoardButtonsComponent;
  let fixture: ComponentFixture<PlayerBoardButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerBoardButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerBoardButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
