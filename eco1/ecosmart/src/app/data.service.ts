import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  carbon = 0;
  electricity = 0;
  transport = 0;
  food = 0;

  setData(carbon: number, e: number, t: number, f: number) {
    this.carbon = carbon;
    this.electricity = e;
    this.transport = t;
    this.food = f;
  }

  getData() {
    return {
      carbon: this.carbon,
      electricity: this.electricity,
      transport: this.transport,
      food: this.food
    };
  }
}