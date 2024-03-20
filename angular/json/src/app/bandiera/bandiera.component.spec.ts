import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandieraComponent } from './bandiera.component';

describe('BandieraComponent', () => {
  let component: BandieraComponent;
  let fixture: ComponentFixture<BandieraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandieraComponent]
    });
    fixture = TestBed.createComponent(BandieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
