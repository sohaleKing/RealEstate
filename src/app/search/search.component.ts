import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

@ViewChild('buy' , {static: false}) buy: ElementRef;
@ViewChild('sell' , {static: false}) sell: ElementRef;
@ViewChild('rent', {static: false}) rent: ElementRef;
@ViewChild('lot', {static: false}) lot: ElementRef;
@ViewChild('house', {static: false}) house: ElementRef;
@ViewChild('condo', {static: false}) condo: ElementRef;




  constructor() { }

  ngOnInit() {
  }

  search(){
console.log("these are selected search items as below:");  
console.log(this.buy.nativeElement.checked);        //just ready here to use
console.log(this.sell.nativeElement.checked);
console.log(this.rent.nativeElement.checked);
console.log(this.lot.nativeElement.checked);
console.log(this.house.nativeElement.checked);
console.log(this.condo.nativeElement.checked);
alert("Check the inspect to see the console log")

  }

}
