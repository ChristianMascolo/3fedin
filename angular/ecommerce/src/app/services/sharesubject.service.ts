import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharesubjectService {
  sharingDate: Subject<any> = new Subject<any>();
  moduloASub: Subject<any> = new Subject<any>();
  moduloBSub: Subject<any> = new Subject<any>();
  constructor() { }
}
