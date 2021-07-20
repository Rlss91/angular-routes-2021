import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

interface DelayedData {
  text: string;
  id: string;
}

@Injectable()
export class DelayResorver implements Resolve<DelayedData> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): DelayedData | Observable<DelayedData> | Promise<DelayedData> {
    return { text: 'test' + route.params['id'], id: route.params['id'] };
  }
}
