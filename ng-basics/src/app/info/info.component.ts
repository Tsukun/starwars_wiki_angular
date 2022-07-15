import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IResident } from 'src/interface/resident';
import { IPlanet } from '../../interface/planet';
import { PlanetService } from '../card/card.service';
import { ResidentService } from './info.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  infoPlanet!: IPlanet;
  private subscription: Subscription;
  infoResidents: IResident[] = [];
  filterResidents: IResident[] = [];
  isLoadedResidents: boolean = false;
  planetName: string | undefined;

  constructor(
    private planetService: PlanetService,
    private resService: ResidentService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {
    this.subscription = activateRoute.params.subscribe(
      params => (this.planetName = params['planet']),
    );
  }
  ngOnInit(): void {
    this.infoPlanet = this.planetService.planets.filter(
      element => element.name == this.planetName,
    )[0];

    this.infoResidents = this.resService.getResident(this.infoPlanet.residents);
    this.filterResidents = this.resService.resInfo;
  }
  setGender(gender: string) {
    if (gender == 'all') {
      this.filterResidents = this.infoResidents;
    } else {
      this.filterResidents = this.infoResidents.filter(resident => resident.gender == gender);
    }
  }

  routeResident(nameResident: string) {
    console.log(nameResident);
    this.router.navigate(['resident/', nameResident]);
  }
  routeBack() {
    this.location.back();
  }
}
