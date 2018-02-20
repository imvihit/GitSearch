import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {GitserviceService} from './gitservice.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
