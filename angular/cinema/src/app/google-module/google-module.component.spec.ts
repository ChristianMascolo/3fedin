import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleModuleComponent } from './google-module.component';

describe('GoogleModuleComponent', () => {
  let component: GoogleModuleComponent;
  let fixture: ComponentFixture<GoogleModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleModuleComponent]
    });
    fixture = TestBed.createComponent(GoogleModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
