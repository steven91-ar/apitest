import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposantsComponent } from './exposants.component';

describe('ExposantsComponent', () => {
  let component: ExposantsComponent;
  let fixture: ComponentFixture<ExposantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExposantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExposantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
