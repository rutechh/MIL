import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MshComponent } from './msh/msh.component';
import { ComsComponent } from './coms/coms.component';
import { FmmsComponent } from './fmms/fmms.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
      MshComponent,
      ComsComponent,
      FmmsComponent,
      DashbordComponent,
      HeaderComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
