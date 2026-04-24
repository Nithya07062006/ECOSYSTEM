import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.html',
  styleUrls: ['./map.css']
})
export class Map implements AfterViewInit {

  private map: any;

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    this.map = L.map('map').setView([12.97, 77.59], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    // 👉 CLICK EVENT
    this.map.on('click', (e: any) => {
      const lat = e.latlng.lat;
      const lon = e.latlng.lng;

      this.getAirQuality(lat, lon, e.latlng);
    });
  }

  getAirQuality(lat: number, lon: number, latlng: any) {
    
    const API_KEY = '8d9dde74fa0b9b5a621925d412312a4d';  // ⚠️ put your key here

    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    this.http.get<any>(url).subscribe(res => {
       console.log(res);
      const data = res.list[0];
      const aqi = data.main.aqi;

      const pm2 = data.components.pm2_5;
      const pm10 = data.components.pm10;
      const co = data.components.co;

      // AQI Meaning
      let quality = '';
      if (aqi == 1) quality = 'Good 😊';
      else if (aqi == 2) quality = 'Fair 🙂';
      else if (aqi == 3) quality = 'Moderate 😐';
      else if (aqi == 4) quality = 'Poor 😷';
      else quality = 'Very Poor ☠️';

      // 👉 POPUP
      L.popup()
        .setLatLng(latlng)
        .setContent(`
          <b>🌍 Air Quality</b><br>
          AQI: <b>${aqi}</b> (${quality})<br>
          PM2.5: ${pm2}<br>
          PM10: ${pm10}<br>
          CO: ${co}
        `)
        .openOn(this.map);

    });
  }
}