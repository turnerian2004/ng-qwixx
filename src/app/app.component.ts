import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerBoardButtonComponent } from './player-board-button/player-board-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayerBoardButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-qwixx';
}
