import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueSignUp1Component } from './continue-sign-up1.component';

describe('ContinueSignUp1Component', () => {
  let component: ContinueSignUp1Component;
  let fixture: ComponentFixture<ContinueSignUp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinueSignUp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueSignUp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
