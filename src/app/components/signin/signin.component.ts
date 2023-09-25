import { Component, OnInit } from '@angular/core';
import { UserStateService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userStateService: UserStateService) { }

  signupUsers: any[] = [];

  loginObg: any = {
    email: '',
    password: ''
  };

  ngOnInit(): void {
    console.log("ad",this.userStateService.getUserState());
    const localData = localStorage.getItem("signupUsers");
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }


  onLogin() {
    // debugger
    const isUserExist = this.signupUsers.find(m => m.email == this.loginObg.email && m.password == this.loginObg.password);
    if(isUserExist != undefined) {
      alert("User Login Successfully");
      // localStorage.setItem("isUserLogedIn", "1");
      this.userStateService.setUserState(true);
      console.log(this.userStateService.getUserState());
      window.location.href = '/food';
    } else {
      alert("Wrong credentials");
    }
  }

}
