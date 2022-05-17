import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationContainerComponent } from './station-container.component';

describe('StationContainerComponent', () => {
  let component: StationContainerComponent;
  let fixture: ComponentFixture<StationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
