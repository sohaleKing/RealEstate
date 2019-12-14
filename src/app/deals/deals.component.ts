import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

btnText: string = 'See more';

  @Input() houses : {
     ListingId : number,
    address : string, 
    price : string, 
    description : string
  };

 btnStatus : boolean = true;
  constructor() { 

     setTimeout( () => { this.btnStatus = false; } ,2000);
  }
infos(){
     alert("the agent will call you in 24hrs")
   }
  ngOnInit() {
  }

}
