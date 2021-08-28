import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private counterSubject = new BehaviorSubject<number>(0);
  counter$ = this.counterSubject.asObservable();

  constructor() {
    console.log('DataService is created');
  }

  foo() {
    console.log('foo from service');
  }

  increment(): void {
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  decrement(): void {
    this.counterSubject.next(this.counterSubject.value - 1);
  }
}
