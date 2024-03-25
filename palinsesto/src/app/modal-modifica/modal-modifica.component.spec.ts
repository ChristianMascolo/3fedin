import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModificaComponent } from './modal-modifica.component';

describe('ModalModificaComponent', () => {
  let component: ModalModificaComponent;
  let fixture: ComponentFixture<ModalModificaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalModificaComponent]
    });
    fixture = TestBed.createComponent(ModalModificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
