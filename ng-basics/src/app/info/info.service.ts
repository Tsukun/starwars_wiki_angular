import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResident } from 'src/interface/resident';

@Injectable()
export class ResidentService {
  resInfo: IResident[] = [];
  isLoading: boolean = false;
  constructor(private http: HttpClient) {}

  getResident(baseUrl: string[]) {
    this.isLoading = true;
    baseUrl.forEach(element => {
      this.http.get(element).subscribe((data: any) => {
        data.results.forEach((element: any) => {
          let resident: IResident = {
            name: element.name,
            gender: element.gender,
          };

          this.resInfo?.push(resident);
        });
        this.isLoading = false;
      });
    });
  }
}
