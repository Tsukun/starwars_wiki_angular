import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPlanet } from '../../interface/planet';

@Injectable()
export class PlanetService {
  planets: IPlanet[] = [];
  baseUrl: string = 'https://swapi.dev/api/planets';
  isLoading: boolean = false;
  constructor(private http: HttpClient) {}

  getPlanets() {
    this.isLoading = true;
    this.http.get(this.baseUrl).subscribe((data: any) => {
      data.results.forEach((element: any) => {
        let planet: IPlanet = {
          name: element.name,
          rotation_period: element.rotation_period,
          orbital_period: element.orbital_period,
          diameter: element.diameter,
          climate: element.climate,
          gravity: element.gravity,
          terrain: element.terrain,
          surface_water: element.surface_water,
          population: element.population,
          residents: element.residents,
        };

        this.planets.push(planet);
      });
    });
    this.isLoading = false;
  }
}
