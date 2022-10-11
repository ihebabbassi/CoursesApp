import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitApprovementComponent } from './wait-approvement.component';

describe('WaitApprovementComponent', () => {
  let component: WaitApprovementComponent;
  let fixture: ComponentFixture<WaitApprovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitApprovementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitApprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
