import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-title',
  template: `
    <p appMyHighlight>{{title}} {{subtitle}}</p>
    <p *ngIf="user"><i>Welcome, {{user}}</i><p>
  `,
  styles: []
})
export class TitleComponent implements OnInit {
  @Input() subtitle = '';
  title = 'Angular Modules';
  user = '';
  constructor(userService: UserService) { 
    this.user = userService.userName;
   }

  ngOnInit() {
  }

}
