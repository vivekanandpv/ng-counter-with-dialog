import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  counter$!: Observable<number>;
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
