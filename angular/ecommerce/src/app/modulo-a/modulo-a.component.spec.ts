import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloAComponent } from './modulo-a.component';

describe('ModuloAComponent', () => {
  let component: ModuloAComponent;
  let fixture: ComponentFixture<ModuloAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloAComponent]
    });
    fixture = TestBed.createComponent(ModuloAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
