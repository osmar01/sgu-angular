import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogYesNoComponent } from './dialog-yes-no/dialog-yes-no.component';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DialogYesNoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
  ],
  exports: [DialogYesNoComponent]
})
export class SharedModule { }
