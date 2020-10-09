import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassifyImageComponent } from './components/classify-image/classify-image.component';
import { FaceAlignmentComponent } from './components/face-alignment/face-alignment.component';
import { FaceRecognitionComponent } from './components/face-recognition/face-recognition.component';
import { HumanPoseEstimationComponent } from './components/human-pose-estimation/human-pose-estimation.component';
import { GanComponent } from './components/gan/gan.component';
import { SuperResolutionComponent } from './components/super-resolution/super-resolution.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassifyImageComponent,
    FaceAlignmentComponent,
    FaceRecognitionComponent,
    HumanPoseEstimationComponent,
    GanComponent,
    SuperResolutionComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
