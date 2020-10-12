import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClassifyImageComponent } from './components/classify-image/classify-image.component';
import { FaceAlignmentComponent } from './components/face-alignment/face-alignment.component';
import { FaceRecognitionComponent } from './components/face-recognition/face-recognition.component';
import { GanComponent } from './components/gan/gan.component';
import { HumanPoseEstimationComponent } from './components/human-pose-estimation/human-pose-estimation.component';
import { SuperResolutionComponent } from './components/super-resolution/super-resolution.component';

const routes: Routes = [
  { path: 'classify-image', component: ClassifyImageComponent },
  { path: 'face-alignment', component: FaceAlignmentComponent },
  { path: 'face-recognition', component: FaceRecognitionComponent },
  { path: 'human-pose-estimation', component: HumanPoseEstimationComponent },
  { path: 'gan', component: GanComponent },
  { path: 'super-resolution', component: SuperResolutionComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


