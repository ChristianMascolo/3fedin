import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiocattoloComponent } from './giocattolo.component';

describe('GiocattoloComponent', () => {
  let component: GiocattoloComponent;
  let fixture: ComponentFixture<GiocattoloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiocattoloComponent]
    });
    fixture = TestBed.createComponent(GiocattoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
