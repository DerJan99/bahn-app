import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ScheduleContainerComponent} from './schedule-container.component';

describe('ScheduleComponent', () => {
  let component: ScheduleContainerComponent;
  let fixture: ComponentFixture<ScheduleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
