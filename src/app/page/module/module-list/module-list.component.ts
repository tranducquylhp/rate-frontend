import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../service/authentication.service';
import {Module} from '../../../interface/module';
import {ModuleService} from '../../../service/module.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  modules: Module[];

  constructor(private moduleService: ModuleService,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.moduleService.getAllModule().subscribe(next => {
      this.modules = next;
    }, error1 => {
      console.log(error1);
    });
  }
}
