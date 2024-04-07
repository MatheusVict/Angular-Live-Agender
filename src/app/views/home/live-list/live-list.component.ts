import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { LiveService } from '../../../shared/service/live.service';
import { Live } from '../../../shared/model/live.model';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalDateTimePipe } from '../../../shared/pipe/local-date-time.pipe';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-live-list',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, MatChipsModule, LocalDateTimePipe, MatDialogModule],
  templateUrl: './live-list.component.html',
  styleUrl: './live-list.component.css'
})
export class LiveListComponent implements OnInit {
  livesPrevious: Live[] = [];
  nextLives: Live[] = [];

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
    });

    this.liveService.getLivesWithFlag('next').subscribe(data => {
      this.nextLives = data.content;
      this.nextLives.forEach(live => {
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
      })
      console.log(this.nextLives)
    });
  }


}
