import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IResident } from 'src/interface/resident';
import { ResidentService } from '../info/info.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.scss'],
})
export class ResidentComponent implements OnInit, DoCheck {
  //private subscription: Subscription;

  residentName: string | undefined;
  resident!: IResident;

  constructor(
    private resService: ResidentService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {
    // this.subscription = this.activateRoute.params.subscribe(
    //   params => (this.residentName = params['resident']),
    // );
  }

  ngOnInit(): void {
    this.residentName = this.activateRoute.snapshot.params['name'];
    this.resident = this.resService.resInfo.filter(element => element.name == this.residentName)[0];
    console.log(this.resident);
  }
  ngDoCheck() {}

  routeBack() {
    this.location.back();
  }
}
