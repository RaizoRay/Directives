import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from './contact.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-contact',
  template: `
    <h2>Contact of {{userName}}</h2>
    <div *ngIf="msg" class="msg">{{msg}}</div>

    <form *ngIf="contacts" (ngSubmit)="onSubmit()" #contactForm="ngForm">
      <h3 appMyHighlight>{{ contact.name | awesome }}</h3>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" required
          [(ngModel)]="contact.name"
            name="name"  #name="ngModel" >
        <div [hidden]="name.valid" class="alert alert-danger">
          Name is required
        </div>
      </div>
      <br>
      <button type="submit" class="btn btn-default" [disabled]="!contactForm.form.valid">Save</button>
      <button type="button" class="btn" (click)="next()" [disabled]="!contactForm.form.valid">Next Contact</button>
      <button type="button" class="btn" (click)="newContact()">New Contact</button>
    </form>
  `,
  styles: [`
    .ng-valid[required] {
      border-left: 5px solid #42A948; /* green */
    }

    .ng-invalid {
      border-left: 5px solid #a94442; /* red */
    }

    .alert {
      padding: 15px;
      margin: 8px 0;
      border: 1px solid transparent;
      border-radius: 4px;
    }
    .alert-danger {
      color: #a94442;
      background-color: #f2dede;
      border-color: #ebccd1;
    }

    .msg {
      color: blue;
      background-color: whitesmoke;
      border: 1px solid transparent;
      border-radius: 4px;
      margin-bottom: 20px;
    }
  `]
})
export class ContactComponent implements OnInit {
contact:  Contact;
  contacts: Contact[];

  msg = 'Loading contacts ...';
  userName = '';

  constructor(private contactService: ContactService, userService: UserService) {
    this.userName = userService.userName;
  }

  ngOnInit() {
    this.contactService.getContacts().then(contacts => {
      this.msg = '';
      this.contacts = contacts;
      this.contact = contacts[0];
    });
  }

  next() {
    let ix = 1 + this.contacts.indexOf(this.contact);
    if (ix >= this.contacts.length) { ix = 0; }
    this.contact = this.contacts[ix];
  }

  onSubmit() {
    // POST-DEMO TODO: do something like save it
    this.displayMessage('Saved ' + this.contact.name);
  }

  newContact() {
    this.displayMessage('New contact');
    this.contact = {id: 42, name: ''};
    this.contacts.push(this.contact);
  }

  /** Display a message briefly, then remove it. */
  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }
}
