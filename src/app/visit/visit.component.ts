import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HousesService } from '../services/houses.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  address: string;
  description: string;
  price: string;
  ListingId : number;
  nextId : number;
  prevId : number;
  nextDisabled : boolean = false;
  prevDisabled : boolean = false;


  constructor(private route: ActivatedRoute, private houseList : HousesService) { }

  ngOnInit() {
          this.route.params.subscribe((params: Params) => {
          this.ListingId = params.ListingId;
          
          for(let i = 0; i<this.houseList.houses.length; i++){
            let house = this.houseList.houses[i];
            if(house.ListingId == this.ListingId){
              this.address = house.address;
              this.price =house.price;
              this.description = house.description;
              if(i< this.houseList.houses.length-1 && i>=0){
              this.nextId = this.houseList.houses[+i+1].ListingId;
                if(i==0){
                  this.prevDisabled = true;
                }else{
                  this.prevDisabled = false;
                }
              }
              if(i< this.houseList.houses.length && i>=1){
                this.prevId = this.houseList.houses[i-1].ListingId;
                if(i== this.houseList.houses.length-1){
                  this.nextDisabled = true;
                }else{
                  this.nextDisabled = false;
                }
              }
            }  
          }
      });

  }

}
