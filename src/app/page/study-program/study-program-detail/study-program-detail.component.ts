import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {StudyProgramService} from '../../../service/study-program.service';
import {AuthenticationService} from '../../../service/authentication.service';
import {UserService} from '../../../service/user.service';
import {StudyProgram} from '../../../interface/study-program';
import {StandardOutput} from '../../../interface/standard-output';
import {FormControl, FormGroup} from '@angular/forms';
import {StandardOutputService} from '../../../service/standard-output.service';

@Component({
  selector: 'app-study-program-detail',
  templateUrl: './study-program-detail.component.html',
  styleUrls: ['./study-program-detail.component.scss']
})
export class StudyProgramDetailComponent implements OnInit {

  sub: Subscription;
  studyProgram: StudyProgram;
  standardOutputList: Array<StandardOutput> = [];
  isEditDescription: boolean;
  studyProgramForm: FormGroup = new FormGroup({
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
  constructor(private studyProgramService: StudyProgramService,
              private router: Router,
              private authenticationService: AuthenticationService,
              private activateRoute: ActivatedRoute,
              private userService: UserService,
              private standardOutputService: StandardOutputService) {
  }

  ngOnInit() {
    this.sub = this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.studyProgramService.detail(id).subscribe(next => {
        this.studyProgram = next;
        // tslint:disable-next-line:no-shadowed-variable
        this.standardOutputService.getAllStandardOutput(this.studyProgram.id).subscribe(next => {
          this.standardOutputList = next;
          this.standardOutputList.shift();
        }, error1 => {
          console.log(error1);
        });
      }, error1 => {
        console.log(error1);
      });
    });
    console.log(this.studyProgram);
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
    this.studyProgramService.delete(this.studyProgram.id).subscribe(() => {
      console.log('Xóa thành công');
      this.router.navigate(['/list-study-program']);
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
    console.log(this.studyProgramForm.value.description);
    if (this.isEditDescription && this.studyProgramForm.value.description !== '') {
      this.studyProgram = {
        id: this.studyProgram.id,
        name: this.studyProgram.name,
        description: this.studyProgramForm.value.description,
        goal: this.studyProgram.goal,
        standardOutput: this.studyProgram.standardOutput,
        user: this.studyProgram.user
      };
    }
    if (this.isEditName && this.studyProgramForm.value.name !== '') {
      this.studyProgram = {
        id: this.studyProgram.id,
        name: this.studyProgramForm.value.name,
        description: this.studyProgram.description,
        goal: this.studyProgram.goal,
        standardOutput: this.studyProgram.standardOutput,
        user: this.studyProgram.user
      };
    }
    if (this.isEditGoal && this.studyProgramForm.value.goal !== '') {
      this.studyProgram = {
        id: this.studyProgram.id,
        name: this.studyProgram.name,
        description: this.studyProgram.description,
        goal: this.studyProgramForm.value.goal,
        standardOutput: this.studyProgram.standardOutput,
        user: this.studyProgram.user
      };
    }
    this.studyProgramService.edit(this.studyProgram).subscribe(next => {
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
      studyProgram: this.studyProgram
    };
    this.standardOutputService.create(this.studyProgram.id, this.standardOutput).subscribe(next => {
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
        studyProgram: standardOutput.studyProgram
      };

      this.standardOutputService.edit(this.studyProgram.id, standardOutput).subscribe( () => {
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
    this.standardOutputService.delete(this.studyProgram.id, standardOutput.id).subscribe( () => {
      console.log('Xoa thanh cong');
    }, error1 => {
      console.log(error1);
    });
  }
}
