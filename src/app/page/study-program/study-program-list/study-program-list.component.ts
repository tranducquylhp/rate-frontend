import { Component, OnInit } from '@angular/core';
import {StudyProgramService} from '../../../service/study-program.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../service/authentication.service';
import {StudyProgram} from '../../../interface/study-program';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-study-program-list',
  templateUrl: './study-program-list.component.html',
  styleUrls: ['./study-program-list.component.scss']
})
export class StudyProgramListComponent implements OnInit {

  studyPrograms: StudyProgram[];

  constructor(private studyProgramService: StudyProgramService,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.studyProgramService.getAllStudyProgram().subscribe(next => {
      this.studyPrograms = next;
    }, error1 => {
      console.log(error1);
    });
  }
}
