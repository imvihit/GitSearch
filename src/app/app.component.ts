import { Component } from '@angular/core';
import {GitserviceService} from './gitservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [GitserviceService]
})
export class AppComponent {
  title = 'app';
}
