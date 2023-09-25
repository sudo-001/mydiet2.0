import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './components/food/food.component';
import { UserComponent } from './components/user/user.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { SigninComponent } from './components/signin/signin.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: "food", component: FoodComponent },
  { path: "", component: HomeComponent },
  { path: "bmi", component: BmiComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "user", component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
