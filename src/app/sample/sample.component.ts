import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  counter$!:Observable<number>;
  // increment!: () => void;
  // decrement!: () => void;

  constructor(private dataService: DataService) {
    this.counter$ = this.dataService.counter$;
    // this.increment = this.dataService.increment.bind(this.dataService);
    // this.decrement = this.dataService.decrement.bind(this.dataService);
  }

  ngOnInit(): void {
  }

  incrementLocal(): void {
    this.dataService.increment();
  }

  decrementLocal(): void {
    this.dataService.decrement();
  }

}
