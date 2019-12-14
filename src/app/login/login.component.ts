import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
connectedUser = {
  first_name: '',
    last_name: '',
    email: '',
    password: '',
    state: '',
    city: '',
    zip: '' }
    
@ViewChild('f' , {static: false}) loginForm : NgForm;
@ViewChild('password' , {static: false}) password: ElementRef;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginUser(){
    let wrongCredentials = true;
   let accounts = JSON.parse(localStorage["accounts"]);
   for(let account of accounts){
      if(this.loginForm.value.email == account.email && 
      this.loginForm.value.password == account.password ){
        wrongCredentials = false;
        this.router.navigate(['/home']);
      }
   }
   if(wrongCredentials){
     alert("please verify your email or password")
   }
  }


}