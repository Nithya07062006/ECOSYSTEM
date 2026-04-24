import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],   // 🔥 THIS IS THE FIX
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}