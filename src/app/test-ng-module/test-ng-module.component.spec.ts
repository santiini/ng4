import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgModuleComponent } from './test-ng-module.component';

describe('TestNgModuleComponent', () => {
  let component: TestNgModuleComponent;
  let fixture: ComponentFixture<TestNgModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
