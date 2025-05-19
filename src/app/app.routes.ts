import { Routes } from '@angular/router';
import { LoginComponent } from './component/home/login/login.component';
import { RegisterComponent } from './component/home/register/register.component';
import { WelcomeComponent } from './component/home/welcome/welcome.component';
import { CustomerdashboardComponent } from './component/dashboard/customerdashboard/customerdashboard.component';
import { AdmindashboardComponent } from './component/dashboard/admindashboard/admindashboard.component';
import { HeroComponent } from './component/dashboard/customerdashboard/hero/hero.component';
import { AccountsComponent } from './component/dashboard/customerdashboard/accounts/accounts.component';
import { WithdrawComponent } from './component/dashboard/customerdashboard/withdraw/withdraw.component';
import { DepositComponent } from './component/dashboard/customerdashboard/deposit/deposit.component';
import { TransferComponent } from './component/dashboard/customerdashboard/transfer/transfer.component';
import { ChequeComponent } from './component/dashboard/customerdashboard/cheque/cheque.component';
import { HistoryComponent } from './component/dashboard/customerdashboard/history/history.component';
import { Component } from '@angular/core';
import { AccountdetailsComponent } from './component/dashboard/customerdashboard/accounts/accountdetails/accountdetails.component';
import { CustomerLoginComponent } from './component/home/customer-login/customer-login.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path:'customerlogin',
    component:CustomerLoginComponent,
  },
  {
    path:'contactus',
    component:ContactUsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'createaccount',
    component: RegisterComponent,
  },
  {
    path: 'customerdashboard',
    component: CustomerdashboardComponent,
    children: [
      {
        path: 'hero',
        component: HeroComponent,
      },
      {
        path: 'accounts',
        component: AccountsComponent,
      },
      {
        path:'accountdetails',
        component:AccountdetailsComponent
      },
      {
        path: 'withdraw/:withdrawType',
        component: WithdrawComponent,
      },
      {
        path: 'deposit',
        component: DepositComponent,
      },
      {
        path: 'transfer',
        component: TransferComponent,
      },
      {
        path: 'cheque',
        component: ChequeComponent,
      },
      {
        path: 'mini',
        component: HistoryComponent,
      },
       {
        path: 'whole',
        component: HistoryComponent,
      },
    ],
  },

  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
  },
];
