import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { LiveService } from '../../../shared/service/live.service';
import { Live } from '../../../shared/model/live.model';

@Component({
  selector: 'app-live-list',
  standalone: true,
  imports: [MatTabsModule, MatCardModule],
  templateUrl: './live-list.component.html',
  styleUrl: './live-list.component.css'
})
export class LiveListComponent implements OnInit {
  livesPrevious: Live[] = [];
  nextLives: Live[] = [];

  constructor(private liveService: LiveService) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives() {
    this.liveService.getLivesWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content;
      console.log(this.livesPrevious)
    });
    this.liveService.getLivesWithFlag('next').subscribe(data => {
      this.nextLives = data.content;
      console.log(this.nextLives)
    });
  }


}
