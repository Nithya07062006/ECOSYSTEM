import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pollution',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pollution.html',
  styleUrls: ['./pollution.css']
})
export class Pollution {

  lat: number = 12.9716;
  lon: number = 77.5946;

  aqi: number = 0;
  result: any;

  constructor(private http: HttpClient) {}

  // ✅ THIS FUNCTION MUST MATCH BUTTON
  getAirQuality() {

    const API_KEY = '8d9dde74fa0b9b5a621925d412312a4d';

    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${this.lat}&lon=${this.lon}&appid=${API_KEY}`;

    this.http.get<any>(url).subscribe({
      next: (res) => {

        console.log("API Response:", res); // 🔍 debug

        this.result = res.list[0];
        this.aqi = this.result.main.aqi;

      },
      error: (err) => {
        console.error(err);
        alert("API not working ❌");
      }
    });
  }
}