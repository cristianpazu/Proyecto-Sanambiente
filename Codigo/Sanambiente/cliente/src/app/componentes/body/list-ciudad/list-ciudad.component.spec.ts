import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCiudadComponent } from './list-ciudad.component';

describe('ListCiudadComponent', () => {
  let component: ListCiudadComponent;
  let fixture: ComponentFixture<ListCiudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCiudadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
