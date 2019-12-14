import { Component, OnInit } from '@angular/core';
import { HousesService } from '../services/houses.service'; //

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  
houses;
  constructor(private houseList : HousesService) { }

  ngOnInit() {
    this.houses = this.houseList.houses;
  }

}
