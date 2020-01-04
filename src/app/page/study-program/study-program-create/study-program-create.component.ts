import { Component, OnInit } from '@angular/core';
import {StudyProgramService} from '../../../service/study-program.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../service/authentication.service';
import {FormControl, FormGroup} from '@angular/forms';
import {StudyProgram} from '../../../interface/study-program';

@Component({
  selector: 'app-study-program-create',
  templateUrl: './study-program-create.component.html',
  styleUrls: ['./study-program-create.component.scss']
})
export class StudyProgramCreateComponent implements OnInit {

  studyProgramForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    goal: new FormControl('')
  });
  studyProgram: StudyProgram;
  constructor(private studyProgramService: StudyProgramService,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  create() {
    this.studyProgram = {
      name: this.studyProgramForm.value.name,
      description: this.studyProgramForm.value.description,
      goal: this.studyProgramForm.value.goal,
      standardOutput: []
    };

    this.studyProgramService.create(this.studyProgram).subscribe(next => {
      console.log(next);
      console.log('Tạo mới thành công');
      this.router.navigate(['list-study-program']);
    }, error1 => {
      console.log(error1);
    });
  }
}
