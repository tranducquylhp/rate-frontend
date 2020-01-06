import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './helper/jwt-interceptor';
import { RegisterComponent } from './page/user/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './page/header/header.component';
import { LoginComponent } from './page/user/login/login.component';
import {ModuleListComponent} from './page/module/module-list/module-list.component';
import {ModuleCreateComponent} from './page/module/module-create/module-create.component';
import {ModuleDetailComponent} from './page/module/module-detail/module-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    ModuleListComponent,
    ModuleCreateComponent,
    ModuleDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
