import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { MyHighlightDirective } from './my-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    MyHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
