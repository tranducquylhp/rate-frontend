import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../service/authentication.service';
import {first} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  returnUrl: string;
  error = '';
  loading = false;
  submitted = false;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
    this.authenticationService.logout();
  }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
  }

  login() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.userForm.value.username, this.userForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          localStorage.setItem('ACCESS_TOKEN', data.accessToken);
          this.router.navigate([this.returnUrl]);
          window.location.reload();
        },
        error => {
          this.error = 'Sai tên đăng nhập hoặc mật khẩu';
          this.loading = false;
        });
  }
}
