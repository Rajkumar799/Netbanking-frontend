import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customerdashboard',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './customerdashboard.component.html',
  styleUrl: './customerdashboard.component.css',
})
export class CustomerdashboardComponent {
  constructor(private router: Router,private activeRoute:ActivatedRoute) {}

  withdraw_flag: boolean = false;
  history_flag:boolean=false;
  cheque: string = 'cheque';
  money: string = 'money';
  whole:string='whole';
  mini:string='mini'

  withdraw() {
    this.withdraw_flag = !this.withdraw_flag;
  }

  history(){
    this.history_flag= !this.history_flag;
  }
  withdrawCheque(withdrawType: string) {
    this.router.navigate(['/customerdashboard/withdraw/', withdrawType]);
  }
  withdrawMoney(withdrawType: string) {
    this.router.navigate(['/customerdashboard/withdraw/', withdrawType]);
  }


  minitransaction(type: string) {
    console.log('rahul');
    this.router.navigate(['/customerdashboard', type]);
  }
  wholetransactions(type: string) {
    console.log('sonu');
    this.router.navigate(['/customerdashboard', type]);
  }

}
