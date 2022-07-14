import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PlanetService } from './card/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PlanetService],
})
export class AppComponent implements OnInit, DoCheck {
  isPlanetService: boolean = true;
  constructor(private planetService: PlanetService) {}
  ngOnInit() {
    this.planetService.getPlanets();
    this.isPlanetService = this.planetService.isLoading;
  }

  ngDoCheck(): void {}
}
