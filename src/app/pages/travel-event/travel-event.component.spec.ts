import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelEventComponent } from './travel-event.component';

describe('TravelEventComponent', () => {
  let component: TravelEventComponent;
  let fixture: ComponentFixture<TravelEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
