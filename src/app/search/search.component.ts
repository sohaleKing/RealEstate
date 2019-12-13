import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

@ViewChild('buy') buy: ElementRef;
@ViewChild('sell') sell: ElementRef;
@ViewChild('rent') rent: ElementRef;
@ViewChild('lot') lot: ElementRef;
@ViewChild('house') house: ElementRef;
@ViewChild('condo') condo: ElementRef;




  constructor() { }

  ngOnInit() {
  }

  search(){
console.log(this.buy.nativeElement.checked);        //just ready here to use
console.log(this.sell.nativeElement.checked);
console.log(this.rent.nativeElement.checked);
console.log(this.lot.nativeElement.checked);
console.log(this.house.nativeElement.checked);
console.log(this.condo.nativeElement.checked);

  }

}
