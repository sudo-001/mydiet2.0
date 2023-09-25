import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  bmis: any[] = [];

  bmiObj: any = {
    weight: '',
    height: '',
    date: new Date().getDate(),
    bmi: 0.0
  };

  calculateAndSave() {
    this.bmiObj.bmi = this.bmiObj.weight / (this.bmiObj.height * this.bmiObj.height);

    this.bmis.push(this.bmiObj);
    localStorage.setItem("bmis", JSON.stringify(this.bmiObj))
    this.bmiObj = {
      weight: '',
      height: '',
      date: new Date().getDate(),
      bmi: 0.0,
    }
  }
}
