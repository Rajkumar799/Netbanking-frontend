import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  constructor(private router:Router){}
  accounts(){
    this.router.navigate(["/customerdashboard/accounts"])
  }
  withdraw(){
    this.router.navigate(["/customerdashboard/withdraw/:withdrawType"])
  }
  transfer(){
    this.router.navigate(["/customerdashboard/transfer"])
  }
  deposit(){
    this.router.navigate(["/customerdashboard/deposit"])
  }
}
