import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsNumbersComponent } from './statistics-numbers.component';

describe('StatisticsNumbersComponent', () => {
  let component: StatisticsNumbersComponent;
  let fixture: ComponentFixture<StatisticsNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
