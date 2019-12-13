import { Component, OnInit, } from '@angular/core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';        //when you use your template driven form you need to add this

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
faUser = faUser;
faLock = faLock;


  constructor() { }

  ngOnInit() {
  }

}
