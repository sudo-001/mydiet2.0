import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  fullName: string = '';
  weight: number = 0.0;
  height: number = 0.0;
  bmi: number = 0.0;

  ngOnInit(): void {
    let localData = JSON.parse(localStorage.getItem("signupUsers")!);
    if (localData != null) {
      this.fullName = localData.fullName;
    }

    let localData2 = JSON.parse(localStorage.getItem("bmis")!);
    if (localData2 != null) {
      this.weight = localData2.weight;
      this.height = localData2.height;
      this.bmi = localData2.bmi;
    }

    // console.log("bmis",localStorage.getItem("bmis"));

    // this.fullname = localData!.fullName;
  }
}
