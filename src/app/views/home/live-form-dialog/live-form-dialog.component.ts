import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LiveService } from '../../../shared/service/live.service';

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
    MatDialogClose,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './live-form-dialog.component.html',
  styleUrl: './live-form-dialog.component.css'
})
export class LiveFormDialogComponent implements OnInit {

  public liveForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LiveFormDialogComponent>,
    private liveService: LiveService
  ) {
  }
  ngOnInit(): void {
    this.liveForm = this.formBuilder.group({
      liveName: ['', [Validators.required]],
      channelName: ['', [Validators.required]],
      liveLink: ['', [Validators.required]],
      liveDate: ['2024-09-02T20:00:00', [Validators.required]],
      liveTime: ['', [Validators.required]]
    })
  }

  cancel(): void {
    this.dialogRef.close();
    this.liveForm.reset();
  }

  createLive(): void {
    this.liveService.createLive(this.liveForm.value).subscribe(result => {
      this.cancel();
      this.liveForm.reset();
    })
  }
}
