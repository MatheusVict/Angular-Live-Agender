import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card'; 

@Component({
  selector: 'app-live-list',
  standalone: true,
  imports: [MatTabsModule, MatCardModule],
  templateUrl: './live-list.component.html',
  styleUrl: './live-list.component.css'
})
export class LiveListComponent {

}
