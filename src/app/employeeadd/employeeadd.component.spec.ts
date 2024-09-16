import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeaddComponent } from './employeeadd.component';

describe('EmployeeaddComponent', () => {
  let component: EmployeeaddComponent;
  let fixture: ComponentFixture<EmployeeaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeaddComponent]
    });
    fixture = TestBed.createComponent(EmployeeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
