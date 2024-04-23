import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHotelComponent } from './modal-hotel.component';

describe('ModalHotelComponent', () => {
  let component: ModalHotelComponent;
  let fixture: ComponentFixture<ModalHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalHotelComponent]
    });
    fixture = TestBed.createComponent(ModalHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
