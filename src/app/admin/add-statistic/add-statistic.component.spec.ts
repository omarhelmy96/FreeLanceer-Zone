import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStatisticComponent } from './add-statistic.component';

describe('AddStatisticComponent', () => {
  let component: AddStatisticComponent;
  let fixture: ComponentFixture<AddStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
