import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGameComponent } from './modal-game.component';

describe('ModalGameComponent', () => {
  let component: ModalGameComponent;
  let fixture: ComponentFixture<ModalGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalGameComponent]
    });
    fixture = TestBed.createComponent(ModalGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
