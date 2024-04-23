import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFlightComponent } from './modal-flight.component';

describe('ModalFlightComponent', () => {
  let component: ModalFlightComponent;
  let fixture: ComponentFixture<ModalFlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFlightComponent]
    });
    fixture = TestBed.createComponent(ModalFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
