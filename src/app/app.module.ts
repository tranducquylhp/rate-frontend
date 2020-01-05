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
import { StudyProgramListComponent } from './page/study-program/study-program-list/study-program-list.component';
import { StudyProgramCreateComponent } from './page/study-program/study-program-create/study-program-create.component';
import { StudyProgramDetailComponent } from './page/study-program/study-program-detail/study-program-detail.component';
import { StandardOutputCreateComponent } from './page/standard-output/standard-output-create/standard-output-create.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    StudyProgramListComponent,
    StudyProgramCreateComponent,
    StudyProgramDetailComponent,
    StandardOutputCreateComponent
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
