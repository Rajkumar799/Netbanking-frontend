import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  imports: [CommonModule, FormsModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent {
  constructor(private router: Router) {}
  nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  accountId:number=0;
  operAccountDetail() {
    console.log('sonu');
    
    this.router.navigate(['/customerdashboard/accountdetails/']);
  }
}
