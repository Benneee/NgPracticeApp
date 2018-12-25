import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneArtisteComponent } from './one-artiste.component';

describe('OneArtisteComponent', () => {
  let component: OneArtisteComponent;
  let fixture: ComponentFixture<OneArtisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneArtisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
