import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResident } from 'src/interface/resident';

@Injectable({ providedIn: 'root' })
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
          height: data.height,
          mass: data.mass,
          hair_color: data.hair_color,
          skin_color: data.skin_color,
          eye_color: data.eye_color,
          birth_year: data.birth_year,
        };
        this.resInfo.push(resident);
      });
    });
    this.isLoading = false;
    return this.resInfo;
  }
}
