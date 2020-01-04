import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyProgramCreateComponent } from './study-program-create.component';

describe('StudyProgramCreateComponent', () => {
  let component: StudyProgramCreateComponent;
  let fixture: ComponentFixture<StudyProgramCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyProgramCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyProgramCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
