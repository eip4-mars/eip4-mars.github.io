import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceAlignmentComponent } from './face-alignment.component';

describe('FaceAlignmentComponent', () => {
  let component: FaceAlignmentComponent;
  let fixture: ComponentFixture<FaceAlignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceAlignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
