import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-live-list',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './live-list.component.html',
  styleUrl: './live-list.component.css'
})
export class LiveListComponent {

}
