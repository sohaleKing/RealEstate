import { Component, OnInit, Input } from '@angular/core'; //

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  btnText: string = 'See more';

  @Input() brokers : {
    id : number,
    name : string, 
    contact : string, 
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
