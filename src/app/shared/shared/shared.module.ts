import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogYesNoComponent } from './dialog-yes-no/dialog-yes-no.component';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SubHeaderSingOutComponent } from './components/sub-header-sing-out/sub-header-sing-out.component';



@NgModule({
  declarations: [
    DialogYesNoComponent,
    SubHeaderSingOutComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
  ],
  exports: [
    DialogYesNoComponent,
    SubHeaderSingOutComponent
  ]
})
export class SharedModule { }
