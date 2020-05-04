import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancersOpinionsComponent } from './freelancers-opinions.component';

describe('FreelancersOpinionsComponent', () => {
  let component: FreelancersOpinionsComponent;
  let fixture: ComponentFixture<FreelancersOpinionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancersOpinionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancersOpinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
