import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../can-deactivate-guard.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css'],
})
export class Page4Component
  implements OnInit, OnDestroy, CanComponentDeactivate
{
  allowClose: boolean;
  showpopup: boolean;
  clikObs: Observable<boolean>;
  obsObser: any;
  constructor() {
    this.allowClose = false;
    this.showpopup = false;
    this.clikObs = new Observable((obs) => {
      this.obsObser = obs;
    });
  }
  ngOnDestroy(): void {}

  ngOnInit(): void {}

  onAllowClose(allowClose: boolean): void {
    this.allowClose = allowClose;
    this.obsObser.next(this.allowClose);
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    // if (!this.showpopup) {
    //   this.showpopup = true;
    //   return false;
    // }
    // return this.allowClose;
    // if (!this.showpopup) {
    //   this.showpopup = true;
    // }
    // return this.clikObs;
    return confirm('Are you sure');
  }
}
