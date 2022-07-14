import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PlanetService } from './card/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PlanetService],
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
