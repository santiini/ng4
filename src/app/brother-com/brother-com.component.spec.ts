import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotherComComponent } from './brother-com.component';

describe('BrotherComComponent', () => {
  let component: BrotherComComponent;
  let fixture: ComponentFixture<BrotherComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrotherComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrotherComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
