import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import { LiveListComponent } from './live-list/live-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, LiveListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
