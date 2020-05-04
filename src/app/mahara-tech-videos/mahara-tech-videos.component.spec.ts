import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaharaTechVideosComponent } from './mahara-tech-videos.component';

describe('MaharaTechVideosComponent', () => {
  let component: MaharaTechVideosComponent;
  let fixture: ComponentFixture<MaharaTechVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaharaTechVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaharaTechVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
