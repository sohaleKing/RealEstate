import { Component, OnInit } from '@angular/core';
import { faUserCog, faBars } from '@fortawesome/free-solid-svg-icons';      //any icon form fontawesome you need to use, you have to add it on .ts file of the component and also inside the export

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
faUserCog = faUserCog;          //using the fontawesome icon you have to add this line here and also inside the html file <fa-icon [icon]="faUserCog"></fa-icon>
faBars = faBars;                //using the fontawesome icon


  constructor() { }

  ngOnInit() {
  }

}
