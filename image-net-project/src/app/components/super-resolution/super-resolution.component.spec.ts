import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperResolutionComponent } from './super-resolution.component';

describe('SuperResolutionComponent', () => {
  let component: SuperResolutionComponent;
  let fixture: ComponentFixture<SuperResolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperResolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
