import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AuthenticationService} from '../../../service/authentication.service';
import {UserService} from '../../../service/user.service';
import {Module} from '../../../interface/module';
import {StandardOutput} from '../../../interface/standard-output';
import {FormControl, FormGroup} from '@angular/forms';
import {StandardOutputService} from '../../../service/standard-output.service';
import {ModuleService} from '../../../service/module.service';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.scss']
})
export class ModuleDetailComponent implements OnInit {

  sub: Subscription;
  module: Module;
  standardOutputList: Array<StandardOutput> = [];
  isEditDescription: boolean;
  moduleForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    goal: new FormControl('')
  });
  isEditName: boolean;
  isEditGoal: boolean;
  standardOutputForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });
  standardOutput: StandardOutput;
  isEditStandardOutput: boolean[] = [];
  editStandardOutputForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });
  constructor(private moduleService: ModuleService,
              private router: Router,
              private authenticationService: AuthenticationService,
              private activateRoute: ActivatedRoute,
              private userService: UserService,
              private standardOutputService: StandardOutputService) {
  }

  ngOnInit() {
    this.sub = this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.moduleService.detail(id).subscribe(next => {
        this.module = next;
        console.log(this.module);
        // tslint:disable-next-line:no-shadowed-variable
        this.standardOutputService.getAllStandardOutput(this.module.id).subscribe(next => {
          this.standardOutputList = next;
          this.standardOutputList.shift();
        }, error1 => {
          console.log(error1);
        });
      }, error1 => {
        console.log(error1);
      });
    });

    this.isEditDescription = false;
    this.isEditName = false;
    this.isEditGoal = false;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.standardOutputList.length; i++) {
      const output = this.standardOutputList[i];
      this.isEditStandardOutput[output.id] = false;
    }
  }

  delete() {
    this.moduleService.delete(this.module.id).subscribe(() => {
      console.log('Xóa thành công');
      this.router.navigate(['/list-module']);
    }, error1 => {
      console.log(error1);
    });
  }

  editDescription() {
    this.isEditDescription = !this.isEditDescription;
  }

  editName() {
    this.isEditName = !this.isEditName;
  }

  editGoal() {
    this.isEditGoal = !this.isEditGoal;
  }

  update() {
    console.log(this.moduleForm.value.description);
    if (this.isEditDescription && this.moduleForm.value.description !== '') {
      this.module = {
        id: this.module.id,
        name: this.module.name,
        description: this.moduleForm.value.description,
        goal: this.module.goal,
        standardOutput: this.module.standardOutput,
        user: this.module.user
      };
    }
    if (this.isEditName && this.moduleForm.value.name !== '') {
      this.module = {
        id: this.module.id,
        name: this.moduleForm.value.name,
        description: this.module.description,
        goal: this.module.goal,
        standardOutput: this.module.standardOutput,
        user: this.module.user
      };
    }
    if (this.isEditGoal && this.moduleForm.value.goal !== '') {
      this.module = {
        id: this.module.id,
        name: this.module.name,
        description: this.module.description,
        goal: this.moduleForm.value.goal,
        standardOutput: this.module.standardOutput,
        user: this.module.user
      };
    }
    this.moduleService.edit(this.module).subscribe(next => {
      console.log('update thành công');
      console.log(next);
    }, error1 => {
      console.log(error1);
    });
    this.isEditDescription = false;
    this.isEditName = false;
    this.isEditGoal = false;
  }

  add() {
    this.standardOutput = {
      name: this.standardOutputForm.value.name,
      module: this.module
    };
    this.standardOutputService.create(this.module.id, this.standardOutput).subscribe(next => {
      this.standardOutputList.unshift(next);
      console.log('Add thanh cong');
    }, error1 => {
      console.log(error1);
    });
    this.standardOutputForm.reset();
  }

  editStandardOutput(standardOutputId) {
    this.isEditStandardOutput[standardOutputId] = !this.isEditStandardOutput[standardOutputId];
  }

  updateStandardOutput(standardOutput: StandardOutput) {
    if (this.isEditStandardOutput[standardOutput.id] && this.editStandardOutputForm.value.name !== '') {
      const index = this.standardOutputList.indexOf(standardOutput);
      this.standardOutputList.splice(index, 1);
      standardOutput = {
        id: standardOutput.id,
        name: this.editStandardOutputForm.value.name,
        module: standardOutput.module
      };

      this.standardOutputService.edit(this.module.id, standardOutput).subscribe( () => {
        console.log('Sua thanh cong');
      }, error1 => {
        console.log(error1);
      });

      this.standardOutputList.unshift(standardOutput);
    }
    this.isEditStandardOutput[standardOutput.id] = false;
  }

  deleteStandardOtuput(standardOutput: StandardOutput) {
    const index = this.standardOutputList.indexOf(standardOutput);
    this.standardOutputList.splice(index, 1);
    this.standardOutputService.delete(this.module.id, standardOutput.id).subscribe( () => {
      console.log('Xoa thanh cong');
    }, error1 => {
      console.log(error1);
    });
  }
}
