import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
constructor(private router:Router){}

 customerLogin(){
  this.router.navigate(["/customerlogin"]);
 }
 login(){
    this.router.navigate(["/login"]);
  }
  register(){
    this.router.navigate(["/createaccount"]);
  }
  customer(){
    this.router.navigate(["/customerdashboard/hero"]);
  }
  admin(){
    this.router.navigate(["/admindashboard"]);
  }
  contactPage(){
    this.router.navigate(['/contactus']);
  }

  
}
