import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyProgramDetailComponent } from './study-program-detail.component';

describe('StudyProgramDetailComponent', () => {
  let component: StudyProgramDetailComponent;
  let fixture: ComponentFixture<StudyProgramDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyProgramDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyProgramDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
