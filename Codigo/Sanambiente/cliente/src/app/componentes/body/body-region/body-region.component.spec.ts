import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRegionComponent } from './body-region.component';

describe('BodyRegionComponent', () => {
  let component: BodyRegionComponent;
  let fixture: ComponentFixture<BodyRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
