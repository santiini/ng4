import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgPipeComponent } from './test-ng-pipe.component';

describe('TestNgPipeComponent', () => {
  let component: TestNgPipeComponent;
  let fixture: ComponentFixture<TestNgPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
