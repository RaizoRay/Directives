import { Component } from '@angular/core';

import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: string;
  private switch = true;
  private value = 100;
  private names = ['Rahul', 'Sai Kumari', 'Aarthi', 'Harun Kumar'];
  onSwitch() {
    this.switch = !this.switch;
  }
}
