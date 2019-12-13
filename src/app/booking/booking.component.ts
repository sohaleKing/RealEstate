import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BrokersService } from '../services/brokers.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

name: string;
description: string;
contact: string;
id : number
nextId : number
prevId : number;
nextDisabled : boolean = false;
prevDisabled : boolean = false;

  constructor(private route: ActivatedRoute, private brokList : BrokersService) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
          this.id = params.id;
          
          for(let i = 0; i<this.brokList.brokers.length; i++){
            let prod = this.brokList.brokers[i];
            if(prod.id == this.id){
              this.name = prod.name;
              this.contact = prod.contact;
              this.description = prod.description;
              if(i< this.brokList.brokers.length-1 && i>=0){
              this.nextId = this.brokList.brokers[+i+1].id;
                if(i==0){
                  this.prevDisabled = true;
                }else{
                  this.prevDisabled = false;
                }
              }
              if(i< this.brokList.brokers.length && i>=1){
                this.prevId = this.brokList.brokers[i-1].id;
                if(i== this.brokList.brokers.length-1){
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
