import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-live-form-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './live-form-dialog.component.html',
  styleUrl: './live-form-dialog.component.css'
})
export class LiveFormDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<LiveFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 

  }

  cancel(): void {
    this.dialogRef.close();
  }
}
