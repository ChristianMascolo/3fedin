import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPropertyComponent } from './modal-property.component';

describe('ModalPropertyComponent', () => {
  let component: ModalPropertyComponent;
  let fixture: ComponentFixture<ModalPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPropertyComponent]
    });
    fixture = TestBed.createComponent(ModalPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
