import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnewComponent } from './listnew.component';

describe('ListnewComponent', () => {
  let component: ListnewComponent;
  let fixture: ComponentFixture<ListnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
