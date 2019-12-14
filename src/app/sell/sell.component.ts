import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HousesService } from '../services/houses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  addHouseForm : FormGroup;

  constructor(private houseService : HousesService, private router : Router) { }

  ngOnInit() {
    this.addHouseForm = new FormGroup({
     'address' : new FormControl(null, [Validators.required, Validators.maxLength(60)]),
     'price' : new FormControl(null, Validators.required),
     'description' : new FormControl(null),
   });
  }
    

 addNewHouse(){
    this.houseService.houses.push({
      ListingId : (this.houseService.houses.length + 1),
      address : this.addHouseForm.value.address,
      price : this.addHouseForm.value.price,
      description : this.addHouseForm.value.description,
    });
    this.router.navigate(['/buy'])
  }
}
