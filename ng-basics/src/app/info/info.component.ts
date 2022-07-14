import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IResident } from 'src/interface/resident';
import { IPlanet } from '../../interface/planet';
import { ResidentService } from './info.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  providers: [ResidentService],
})
export class InfoComponent implements OnInit, OnChanges, DoCheck {
  constructor(private resService: ResidentService) {}

  @Input()
  infoPlanet!: IPlanet;

  infoResidents: IResident[] = [];
  filterResidents: IResident[] = [];
  isLoadedResidents: boolean = false;

  ngOnInit(): void {}
  setGender(gender: string) {
    if (gender == 'all') {
      this.filterResidents = this.infoResidents;
    } else {
      this.filterResidents = this.infoResidents.filter(resident => resident.gender == gender);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.infoPlanet != undefined) {
      this.infoResidents = this.resService.getResident(this.infoPlanet.residents);
    }

    this.filterResidents = this.infoResidents;
  }

  ngDoCheck(): void {
    this.isLoadedResidents = this.resService.isLoading;
  }
}
