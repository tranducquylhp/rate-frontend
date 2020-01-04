import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';
import {User} from '../../../interface/user';
import {Role} from '../../../interface/role';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private  router: Router) { }

  user: User;
  userForm: FormGroup;
  role: Role = {name: 'ROLE_STUDENT'};
  ngOnInit() {
    this.userForm = this.fb.group({
      name: '',
      username: '',
      password: '',
      confirmPassword: ''
    });
  }

  createUser() {
    this.user = {
      name: this.userForm.value.name,
      password: this.userForm.value.password,
      confirmPassword: this.userForm.value.confirmPassword,
      username: this.userForm.value.username,
      role: this.role,
      studyProgram: []
    };

    this.userService.register(this.user).subscribe( next => {
      console.log('Register successful');
      this.router.navigate(['']);
      this.userForm.reset();
    }, error1 => {
      console.log('lỗi' + error1);
    });
  }

  setRole(event) {
    const value = event.target.value;
    this.role = { name: value};
  }
}
