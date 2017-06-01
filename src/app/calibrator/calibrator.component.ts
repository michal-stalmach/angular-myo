import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { ArmbandService } from "app/services/armband";

@Component({
  selector: 'app-calibrator',
  templateUrl: './calibrator.component.html',
  styleUrls: ['./calibrator.component.css']
})
export class CalibratorComponent implements OnInit {



  constructor(private armband: ArmbandService) { }

  ngOnInit() {
    this.armband.fist$.subscribe(data => console.log("fist", data));
    this.armband.fistOff$.subscribe(data => console.log("fist off", data));
  }

  @HostListener("click")
  onClick(): void {
    this.armband.calibrate();
  }

}
