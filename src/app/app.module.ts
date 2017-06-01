import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArmbandSliderComponent } from './armband-slider/armband-slider.component';
import { ArmbandService } from './services/armband';
import { CalibratorComponent } from './calibrator/calibrator.component';
import { CanvasComponent } from './canvas/canvas.component';
import { ColorSwitcherComponent } from './color-switcher/color-switcher.component';


@NgModule({
  declarations: [
    AppComponent,
    ArmbandSliderComponent,
    CalibratorComponent,
    CanvasComponent,
    ColorSwitcherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ArmbandService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
