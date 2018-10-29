import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TestComponent} from '../test/test.component';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpService} from './mycomponent/http.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MycomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
