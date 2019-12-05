import { Component, OnInit } from '@angular/core';
import { faUserCog, faBars } from '@fortawesome/free-solid-svg-icons';      //any icon form fontawesome you need to use, you have to add it on .ts file of the component and also inside the export


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
