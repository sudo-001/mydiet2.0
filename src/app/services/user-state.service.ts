import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private userState: boolean = false;

  constructor() { }

  setUserState(val: boolean) {
    this.userState = val;
  }

  getUserState() {
    return this.userState;
  }
}
