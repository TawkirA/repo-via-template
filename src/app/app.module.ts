import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { DateFormatPipe } from './common/date-format.pipe';
import { ColorDangerDirective } from './common/colorDangerDirective';

@NgModule({
  declarations: [
    AppComponent,
    DateFormatPipe,
    ColorDangerDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
