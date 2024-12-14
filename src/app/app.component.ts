import { Component } from '@angular/core';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-root',
  standalone : true,
  imports : [UserDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'my-angular-app';
}
