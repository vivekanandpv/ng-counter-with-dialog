import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  bar!: DataService;

  constructor(ds: DataService) {
    this.bar = ds;
  }

  ngOnInit(): void {
    this.bar.foo();
    console.log(this.bar.counter);
  }

}
