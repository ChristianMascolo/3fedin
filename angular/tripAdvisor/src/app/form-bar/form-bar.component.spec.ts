import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBarComponent } from './form-bar.component';

describe('FormBarComponent', () => {
  let component: FormBarComponent;
  let fixture: ComponentFixture<FormBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBarComponent]
    });
    fixture = TestBed.createComponent(FormBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
