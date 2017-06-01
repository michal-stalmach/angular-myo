import { Component, OnInit, Output } from '@angular/core';
import { ArmbandService } from "../services/armband";

@Component({
  selector: 'app-color-switcher',
  templateUrl: './color-switcher.component.html',
  styleUrls: ['./color-switcher.component.css']
})
export class ColorSwitcherComponent {

  private colorPallete: Array<String> = [ 'blue', 'purple', 'pink', 'red', 'orange', 'yellow', 'greenyellow', 'green', 'skyblue'];

  @Output()
  private currentColor: String;

  private index = 0;

  constructor(armband: ArmbandService) {
    this.currentColor = this.colorPallete[0];
    armband.swipeLeft$().subscribe(() => {
      this.index = this._prevColor();
      this.currentColor = this.colorPallete[this.index];
    });
    armband.swipeRight$().subscribe(() => {
      this.index = this._nextColor();
      this.currentColor = this.colorPallete[this.index];
     });
  }

  _prevColor() {
    const newIndex = this.index - 1;

    if (newIndex < 0) {
      return this.colorPallete.length - 1;
    }

    return newIndex;
  }

  _nextColor() {
    const newIndex = this.index + 1;

    if (newIndex > this.colorPallete.length - 1) {
      return 0;
    }

    return newIndex;
  }

}
