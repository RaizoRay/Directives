import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { MyHighlightDirective } from './my-highlight.directive';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';
import { ContactComponent } from './contact.component';
import { AwesomePipe } from './awesome.pipe';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    MyHighlightDirective,
    TitleComponent,
    ContactComponent,
    AwesomePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
