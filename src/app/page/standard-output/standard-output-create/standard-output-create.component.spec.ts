import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardOutputCreateComponent } from './standard-output-create.component';

describe('StandardOutputCreateComponent', () => {
  let component: StandardOutputCreateComponent;
  let fixture: ComponentFixture<StandardOutputCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardOutputCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardOutputCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
