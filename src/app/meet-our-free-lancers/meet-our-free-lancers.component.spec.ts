import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetOurFreeLancersComponent } from './meet-our-free-lancers.component';

describe('MeetOurFreeLancersComponent', () => {
  let component: MeetOurFreeLancersComponent;
  let fixture: ComponentFixture<MeetOurFreeLancersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetOurFreeLancersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetOurFreeLancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
