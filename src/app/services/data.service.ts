import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  counter = 0;

  constructor() {
    console.log('DataService is created');
  }

  foo() {
    console.log('foo from service');
  }

  increment() {
    ++this.counter;
  }

  decrement() {
    --this.counter;
  }
}
