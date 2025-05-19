import { Component } from '@angular/core';

@Component({
  selector: 'app-cheque',
  imports: [],
  templateUrl: './cheque.component.html',
  styleUrl: './cheque.component.css'
})
export class ChequeComponent {
  textflag:boolean=false;
  
  nums:number[]=[1,2,3,4,5,6,7,8,9,0]
}
