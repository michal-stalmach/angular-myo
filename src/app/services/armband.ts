
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import Myo from 'myo';

@Injectable()
export class ArmbandService {

    armband = Myo;

    constructor() {
        this.armband.on('connected', function () {
            this.vibrate();
            this.streamEMG();
        });
        this.armband.onError = error => console.log(error);
        this.armband.connect('org.neurojs.myo');
    }

    get orientation$() {
        return Observable.fromEvent(this.armband, "orientation");
    }

    get fist$() {
        return Observable.fromEvent(this.armband, "fist");
    }

    get fistOff$() {
        return Observable.fromEvent(this.armband, "fist_off");
    }

    fromEvent(event) {
        return Observable.fromEvent(this.armband, event);
    }

    calibrate() {

        this.armband.methods.zeroOrientation();
    }

    swipeLeft$() {
      return Observable.from(this.armband.on('wave_in'));
    }

    swipeRight$() {
      return Observable.from(this.armband.on('wave_out'));
    }
}
