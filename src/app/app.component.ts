import { Component } from '@angular/core';
import { faUserCog, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RealEstate';
  faUserCog = faUserCog;
  faBars = faBars;
}
