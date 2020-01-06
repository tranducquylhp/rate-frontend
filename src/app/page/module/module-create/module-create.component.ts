import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../service/authentication.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Module} from '../../../interface/module';
import {ModuleService} from '../../../service/module.service';

@Component({
  selector: 'app-module-create',
  templateUrl: './module-create.component.html',
  styleUrls: ['./module-create.component.scss']
})
export class ModuleCreateComponent implements OnInit {

  moduleForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    goal: new FormControl('')
  });
  module: Module;
  constructor(private moduleService: ModuleService,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  create() {
    this.module = {
      name: this.moduleForm.value.name,
      description: this.moduleForm.value.description,
      goal: this.moduleForm.value.goal,
      standardOutput: []
    };

    this.moduleService.create(this.module).subscribe(next => {
      console.log(next);
      console.log('Tạo mới thành công');
      this.router.navigate(['list-module']);
    }, error1 => {
      console.log(error1);
    });
  }
}
