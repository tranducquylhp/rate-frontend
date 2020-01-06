import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './page/user/register/register.component';
import {LoginComponent} from './page/user/login/login.component';
import {ModuleListComponent} from './page/module/module-list/module-list.component';
import {ModuleCreateComponent} from './page/module/module-create/module-create.component';
import {ModuleDetailComponent} from './page/module/module-detail/module-detail.component';


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
    path: 'list-module',
    component: ModuleListComponent
  },
  {
    path: 'create-module',
    component: ModuleCreateComponent
  },
  {
    path: 'list-module/detail-module/:id',
    component: ModuleDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
