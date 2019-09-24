import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCiudadComponent } from './body-ciudad.component';

describe('BodyCiudadComponent', () => {
  let component: BodyCiudadComponent;
  let fixture: ComponentFixture<BodyCiudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyCiudadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
