import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreClockComponent } from './pre-clock.component';

describe('PreClockComponent', () => {
  let component: PreClockComponent;
  let fixture: ComponentFixture<PreClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreClockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
