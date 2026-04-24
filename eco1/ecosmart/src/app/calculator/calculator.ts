import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.css']
})
export class Calculator {

  electricity:number = 1;
  transport:number = 0.1;
  food:number = 0.2;

  carbon:number = 0;
  carbonLevel:string = "";
  color:string = "";
  recommendation:string = "";

  calculateCarbon(){

    const electricityCarbon = this.electricity * 100;
    const transportCarbon = this.transport * 200;
    const foodCarbon = this.food * 150;

    this.carbon = electricityCarbon + transportCarbon + foodCarbon;

    /* SAVE FOR DASHBOARD */
    localStorage.setItem("totalCarbon", this.carbon.toString());

    localStorage.setItem("carbonData", JSON.stringify({
      electricity: electricityCarbon,
      transport: transportCarbon,
      food: foodCarbon
    }));

    /* CARBON LEVEL */
    if(this.carbon < 300){
      this.carbonLevel = "Low Carbon Lifestyle 🌱";
      this.color = "green";
    }

    else if(this.carbon < 600){
      this.carbonLevel = "Moderate Carbon Lifestyle ⚠";
      this.color = "orange";
    }

    else{
      this.carbonLevel = "High Carbon Lifestyle 🔥";
      this.color = "red";
    }

    /* 🔥 SMART AI-LIKE RECOMMENDATION */

    let tips:string[] = [];

    if(this.electricity > 1){
      tips.push("Reduce electricity usage ⚡");
      tips.push("Switch to LED lighting 💡");
    }

    if(this.transport > 0.5){
      tips.push("Use public transport 🚍 or bicycle 🚲");
    }

    if(this.food > 0.3){
      tips.push("Reduce meat consumption 🍖");
      tips.push("Prefer vegetarian diet 🥗");
    }

    if(tips.length === 0){
      this.recommendation =
      "Excellent! Your lifestyle is already eco-friendly 🌍";
    }
    else{
      this.recommendation = tips.join(", ");
    }

  }

}