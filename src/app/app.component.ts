import { Component, OnInit } from '@angular/core';
import { UserStateService } from './services/user-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  title = 'angular-hello-world';
  isUserLogedin!: boolean;

  constructor(private userStateservice: UserStateService) { }

  ngOnInit(): void {
    // localStorage.setItem("isUserLogedIn", "0");
    // this.isUserLogedin = localStorage.getItem("isUserLogedIn")!;
    // this.userStateservice.setUserState(this.isUserLogedin == "0" ? false : true);
    this.isUserLogedin = this.userStateservice.getUserState();
    console.log(this.userStateservice.getUserState());
  }

  Logout() {
    this.userStateservice.setUserState(false);
    console.log(this.userStateservice.getUserState());
  }

}
