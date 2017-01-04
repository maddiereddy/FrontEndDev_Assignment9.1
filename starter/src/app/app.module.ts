import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContainComponent } from './contain/contain.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HeaderComponent, HomeComponent, FooterComponent, ContainComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
