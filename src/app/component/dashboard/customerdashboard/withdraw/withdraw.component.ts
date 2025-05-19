import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  imports: [CommonModule, FormsModule],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css',
})
export class WithdrawComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  withdrawType: string = '';
  withdrawhidden: boolean = true;
  chequehidden: boolean = true;

  ngOnInit(): void {
    this.withdrawType = this.activatedRoute.snapshot.params['withdrawType'];
    if (this.withdrawType == 'cheque') {
      this.withdrawhidden = false;
      this.chequehidden = true;
    }
    if (this.withdrawType == 'money') {
      this.chequehidden = false;
      this.withdrawhidden = true;
    }
    console.log(this.withdrawType);
  }
}
