import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { IResident } from 'src/interface/resident';
import { IPlanet } from '../../interface/planet';
import { ResidentService } from './info.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  providers: [ResidentService],
})
export class InfoComponent implements OnInit, DoCheck {
  constructor(private resService: ResidentService) {}
  @Input()
  infoPlanet!: IPlanet;
  infoResidents: IResident[] = [];

  ngOnInit(): void {}

  ngDoCheck(): void {}
}
