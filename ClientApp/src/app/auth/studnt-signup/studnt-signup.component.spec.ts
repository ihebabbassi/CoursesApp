import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudntSignupComponent } from './studnt-signup.component';

describe('StudntSignupComponent', () => {
  let component: StudntSignupComponent;
  let fixture: ComponentFixture<StudntSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudntSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudntSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
