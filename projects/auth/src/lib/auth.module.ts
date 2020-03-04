import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'projects/core/src/projects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { DonationComponentModule } from 'projects/donation-component/src/projects';
import { AccountService } from './services/account.service';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, RouterModule, AuthRoutingModule, CoreModule, FormsModule, ReactiveFormsModule,
    DonationComponentModule
  ],
  providers: [AccountService],
  exports: []
})
export class AuthModule { }
