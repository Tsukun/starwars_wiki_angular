import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResident } from 'src/interface/resident';

@Injectable()
export class ResidentService {
  resInfo: IResident[] = [];
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  getResident(baseUrl: string[]): IResident[] {
    this.isLoading = true;
    this.resInfo = [];
    baseUrl.forEach(element => {
      this.http.get(element).subscribe((data: any) => {
        let resident: IResident = {
          name: data.name,
          gender: data.gender,
        };

        this.resInfo.push(resident);
        this.isLoading = false;
      });
    });
    return this.resInfo;
  }
}
