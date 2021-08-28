import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  data!: DataService;

  constructor(dataService: DataService) {
    this.data = dataService;
  }

  ngOnInit(): void {
    this.data.foo();
    console.log(this.data.counter);
  }

}
