import { Component, OnInit } from '@angular/core';
import { BrokersService } from '../services/brokers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

brokers;
  constructor(private brokList : BrokersService) { }

  ngOnInit() {
    this.brokers = this.brokList.brokers;
  }

}
