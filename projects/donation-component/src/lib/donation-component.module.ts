import { NgModule } from '@angular/core';
import { DonationComponentComponent } from './donation-component.component';
import { ButtonComponent } from './button/button.component';
import { DialogComponent } from './dialog/dialog.component';
import { ValidationComponent } from './validation/validation.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatSortModule, MatTableModule, MatPaginatorModule } from '@angular/material';



@NgModule({
  declarations: [DonationComponentComponent, ButtonComponent, DialogComponent, ValidationComponent],
  imports: [CommonModule, MatDialogModule, MatSortModule, MatTableModule, MatPaginatorModule
  ],
  exports: [ButtonComponent, ValidationComponent, DialogComponent]
})
export class DonationComponentModule { }
