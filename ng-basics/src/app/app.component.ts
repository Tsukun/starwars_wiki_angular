import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Routes } from '@angular/router';
import { PlanetService } from './card/card.service';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  constructor(private planetService: PlanetService) {}
  isLoadedPlanet: boolean = true;
  ngOnInit() {
    this.planetService.getPlanets();
  }

  ngDoCheck(): void {
    this.isLoadedPlanet = this.planetService.isLoading;
  }
}
