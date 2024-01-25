import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackingComponent } from './timetracker.component';

describe('TimetrackerComponent', () => {
  let component: TimeTrackingComponent;
  let fixture: ComponentFixture<TimeTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeTrackingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
