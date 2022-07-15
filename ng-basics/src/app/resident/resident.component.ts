import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IResident } from 'src/interface/resident';
import { ResidentService } from '../info/info.service';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.scss'],
})
export class ResidentComponent implements OnInit, DoCheck {
  private subscription: Subscription;
  private routeSubscription: Subscription;
  residentName: string | undefined;
  resident!: IResident;

  constructor(
    private resService: ResidentService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.routeSubscription = activateRoute.params.subscribe(
      params => (this.residentName = params['resident']),
    );
    this.subscription = activateRoute.queryParams.subscribe(
      params => (this.residentName = params['resident']),
    );
  }

  ngOnInit(): void {
    this.resident = this.resService.resInfo.filter(element => element.name == this.residentName)[0];
  }
  ngDoCheck() {
    console.log(this.residentName);
  }
}
