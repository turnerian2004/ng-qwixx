import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBoardButtonComponent } from './player-board-button.component';

describe('PlayerBoardButtonComponent', () => {
  let component: PlayerBoardButtonComponent;
  let fixture: ComponentFixture<PlayerBoardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerBoardButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerBoardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
