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
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassifyImageComponent,
    FaceAlignmentComponent,
    FaceRecognitionComponent,
    HumanPoseEstimationComponent,
    GanComponent,
    SuperResolutionComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
