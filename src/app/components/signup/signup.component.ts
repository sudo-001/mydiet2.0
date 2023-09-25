import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupUsers:any[] = [];

  signupObj:any = {
    fullName: '',
    email: '',
    password: '',
  };


  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupObj));
    this.signupObj = {
      fullName: '',
      email: '',
      password: '',
    };
    window.location.href = '/food';
  }



  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem("signupUsers");
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }
}
