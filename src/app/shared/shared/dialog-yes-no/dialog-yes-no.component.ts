import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-yes-no',
  templateUrl: './dialog-yes-no.component.html',
  styleUrl: './dialog-yes-no.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogYesNoComponent {
  readonly dialogRef = inject(MatDialogRef<DialogYesNoComponent>);

  onNoClick(): void {
    this.dialogRef.close();
  }

  yesClick(): void {
    this.dialogRef.close(true);
  }

}
