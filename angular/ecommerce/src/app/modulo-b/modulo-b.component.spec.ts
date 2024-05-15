import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloBComponent } from './modulo-b.component';

describe('ModuloBComponent', () => {
  let component: ModuloBComponent;
  let fixture: ComponentFixture<ModuloBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloBComponent]
    });
    fixture = TestBed.createComponent(ModuloBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
