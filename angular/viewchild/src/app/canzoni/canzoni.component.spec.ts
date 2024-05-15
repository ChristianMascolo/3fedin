import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanzoniComponent } from './canzoni.component';

describe('CanzoniComponent', () => {
  let component: CanzoniComponent;
  let fixture: ComponentFixture<CanzoniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanzoniComponent]
    });
    fixture = TestBed.createComponent(CanzoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
