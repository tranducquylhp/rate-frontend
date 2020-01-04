import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './page/user/register/register.component';
import {LoginComponent} from './page/user/login/login.component';
import {StudyProgramListComponent} from './page/study-program/study-program-list/study-program-list.component';
import {StudyProgramCreateComponent} from './page/study-program/study-program-create/study-program-create.component';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list-study-program',
    component: StudyProgramListComponent
  },
  {
    path: 'create-study-program',
    component: StudyProgramCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
