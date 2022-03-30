import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentFormComponent } from './student-form/student-form.component';
import {AppComponent} from "./app.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {SignupFormComponent} from "./signup-form/signup-form.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'student-form/:id', component: StudentFormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login-form', component: LoginFormComponent},
  { path: 'signup-form', component: SignupFormComponent},
  // { path: 'form', component: FormComponent },
  // { path: 'reactive-form', component: ReactiveFormComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
