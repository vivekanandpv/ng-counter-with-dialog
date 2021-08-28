import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  counter = 0;
  private breachSubject = new BehaviorSubject<boolean>(false);
  isBreached$ = this.breachSubject.asObservable();

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    if (this.counter < 20) {
      ++this.counter;
    } else {
      this.assessBreach();
    }
  }

  decrement(): void {
    if (this.counter > 0) {
      --this.counter;
    } else {
      this.assessBreach();
    }
  }

  assessBreach(): void {
    if (this.counter === 0 || this.counter === 20) {
      this.breachSubject.next(true);
    } else {
      this.breachSubject.next(false);
    }
  }
}
