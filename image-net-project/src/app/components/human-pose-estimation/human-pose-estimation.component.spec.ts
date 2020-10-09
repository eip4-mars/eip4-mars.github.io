import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanPoseEstimationComponent } from './human-pose-estimation.component';

describe('HumanPoseEstimationComponent', () => {
  let component: HumanPoseEstimationComponent;
  let fixture: ComponentFixture<HumanPoseEstimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanPoseEstimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanPoseEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
