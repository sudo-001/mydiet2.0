import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],

})
export class FoodComponent implements OnInit {
  handleDateFilterChange(event: any) {
    console.log(event.target.value);
    const selectedDate = event.target.value;

    this.meals = this.meals.filter((meal) => {
      return (
        meal.date.slice(0,11).toString() == selectedDate.toString()
      )
    })
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.mealObj.image = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem("meals");
    if (localData != null) {
      this.meals = JSON.parse(localData);
    }
  }

  meals: any[] = [];

  mealObj: any = {
    name: '',
    image: '',
    date: new Date(),
    calories: 0.0,
  };

  addMeal() {
    // this.mealObj.date = new Date();
    console.log('meal', this.mealObj);
    this.meals.push(this.mealObj);
    localStorage.setItem('meals', JSON.stringify(this.meals));
    this.mealObj = {
      name: '',
      image: '',
      date: new Date(),
      calories: 0.0,
    };
  }

}
