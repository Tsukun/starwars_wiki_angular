import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import { PlanetService } from './card/card.service';
import { InfoComponent } from './info/info.component';
import { ResidentService } from './info/info.service';
import { AppRoutingModule } from './app-routing.module';
import { ResidentComponent } from './resident/resident.component';
@NgModule({
  declarations: [
    //Объявление компонентов
    AppComponent,
    CardComponent,
    InfoComponent,
    ResidentComponent,
  ],
  imports: [
    //Объявление модулей
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
