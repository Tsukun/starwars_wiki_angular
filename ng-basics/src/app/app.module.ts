import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import { PlanetService } from './card/card.service'
@NgModule({
  declarations: [ //Объявление компонентов
    AppComponent,
    CardComponent
  ],
  imports: [ //Объявление модулей
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
