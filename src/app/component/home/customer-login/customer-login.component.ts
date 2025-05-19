import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  imports: [],
  templateUrl: './customer-login.component.html',
  styleUrl: './customer-login.component.css'
})
export class CustomerLoginComponent {

  constructor(private router:Router){}
  accountOpeningForm(){
    this.router.navigate(['createaccount']);
  }

}
