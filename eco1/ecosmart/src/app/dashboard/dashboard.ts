import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {

  totalCarbon = 0;
  electricity = 0;
  transport = 0;
  food = 0;

  carbonLevel = '';
  color = '';

  ngOnInit() {

    // ✅ GET TOTAL CARBON
    const total = localStorage.getItem("totalCarbon");
    this.totalCarbon = total ? parseInt(total) : 0;

    // ✅ GET GRAPH DATA
    const data = localStorage.getItem("carbonData");

    if (data) {
      const parsed = JSON.parse(data);

      this.electricity = parsed.electricity;
      this.transport = parsed.transport;
      this.food = parsed.food;
    }

    // ✅ CARBON LEVEL LOGIC
    if (this.totalCarbon < 300) {
      this.carbonLevel = "Low Carbon Lifestyle 🌱";
      this.color = "green";
    }
    else if (this.totalCarbon < 600) {
      this.carbonLevel = "Moderate Carbon Lifestyle ⚠";
      this.color = "orange";
    }
    else {
      this.carbonLevel = "High Carbon Lifestyle 🔥";
      this.color = "red";
    }

    this.loadChart();
  }

  loadChart() {

  new Chart('carbonChart', {
    type: 'bar',
    data: {
      labels: ['Electricity', 'Transport', 'Food'],
      datasets: [{
        label: 'Carbon Emissions (kg CO₂)',
        data: [this.electricity, this.transport, this.food],

        // ✅ COLORS FOR EACH BAR
        backgroundColor: [
          '#2ecc71',  // green
          '#f39c12',  // orange
          '#e74c3c'   // red
        ],

        borderRadius: 10
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true
        }
      }
    }
  });
}
          }
       