import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ArmbandService } from "app/services/armband";

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  offsetX = 475;
  offsetY = 170;
  canvasSize = 600;
  scale = 500;
  pointSize = 10;

  @ViewChild("canvas")
  set canvas(el: ElementRef) {
    el.nativeElement.width = 600;
    el.nativeElement.height = 600;
    this.canvasContext = (el.nativeElement as HTMLCanvasElement).getContext("2d");
    this.canvasContext.fillStyle = "#ff2626";
  }

  canvasContext: CanvasRenderingContext2D;

  cursorPosition$ = this.armband.orientation$
    .map(this.normalizaPosition, this)
    .map(({ x, y }) => ({
      'left.px': x,
      'top.px': y
    }));

  draw$ = this.armband.fist$
    .switchMap(() => this.armband.orientation$.takeUntil(this.armband.fistOff$))
    .map(this.normalizaPosition, this)
    .do(({ x, y }) => {
      console.log(x, y);
      this.canvasContext.beginPath();
      this.canvasContext.arc(x, y, this.pointSize, 0, Math.PI * 2, true);
      this.canvasContext.fill();
    }).subscribe(() => { });

  constructor(private armband: ArmbandService) { }

  ngOnInit() {
  }

  normalizaPosition({ x, y, z, w }) {
    console.log(z, x);
    return {
      x: (1 + z) / 2 * this.canvasSize,
      y: (1 + x * 10) / 2 * this.canvasSize
    };
  }

}
