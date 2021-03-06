import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { PlanetService } from './card.service';
import { IPlanet } from '../../interface/planet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, DoCheck {
  planetArr: IPlanet[] = [];
  hiden: boolean = false;
  i: number = 0;
  constructor(private planetService: PlanetService, private router: Router) {}
  ngOnInit(): void {}
  ngDoCheck(): void {
    if (this.planetService.planets.length != 0) {
      this.planetArr = this.planetService.planets;
    }
  }

  showSlide(): string {
    let slide: string = '';
    if (this.planetArr.length != 0) {
      if (this.i < 0) {
        this.i = this.planetArr.length - 1;
      } else if (this.i > this.planetArr.length - 1) {
        this.i = 0;
      }
      slide = this.planetArr[this.i].name;
    }
    return slide;
  }

  getPrev(): void {
    this.i = this.i - 1;
    this.showSlide();
  }

  getNext(): void {
    this.i = this.i + 1;
    this.showSlide();
  }
  routeInfo(): void {
    this.router.navigate([`info/${this.planetArr[this.i].name}`]);
  }
}
