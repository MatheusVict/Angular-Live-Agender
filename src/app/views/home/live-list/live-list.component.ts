import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { LiveService } from '../../../shared/service/live.service';
import { Live } from '../../../shared/model/live.model';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalDateTimePipe } from '../../../shared/pipe/local-date-time.pipe';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-live-list',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, MatChipsModule, LocalDateTimePipe, MatDialogModule, MatProgressBarModule],
  templateUrl: './live-list.component.html',
  styleUrl: './live-list.component.css'
})
export class LiveListComponent implements OnInit {
  livesPrevious: Live[] = [];
  nextLives: Live[] = [];
  next: boolean = false;
  previous: boolean = false;

  constructor(private liveService: LiveService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives() {
    this.liveService.getLivesWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content;
      console.log(this.livesPrevious)
      this.livesPrevious.forEach(live => {
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
      })

      this.previous = true;
    });

    this.liveService.getLivesWithFlag('next').subscribe(data => {
      this.nextLives = data.content;
      this.nextLives.forEach(live => {
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
      })
      console.log(this.nextLives)

      this.next = true;
    });
  }


}
