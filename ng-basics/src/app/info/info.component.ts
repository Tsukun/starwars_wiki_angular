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
export class InfoComponent implements OnInit, OnChanges {
  constructor(private resService: ResidentService) {}
  @Input()
  infoPlanet!: IPlanet;

  infoResidents: IResident[] = [];
  filterResidents: IResident[] = [];
  loaded: boolean = false;

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
      this.loaded = true;
    }
    this.filterResidents = this.infoResidents;
  }
}
