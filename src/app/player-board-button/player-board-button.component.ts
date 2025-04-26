import { Component, Input } from '@angular/core';

interface ColourClasses {
  outerdiv: string;
  innerdiv: string;
}

@Component({
  selector: 'qx-player-board-button',
  imports: [],
  templateUrl: './player-board-button.component.html',
})
export class PlayerBoardButtonComponent {
  @Input() buttonNumber = 0;
  @Input() colourClasses: ColourClasses = { outerdiv: '', innerdiv: '' };
}
