import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

declare var $: any;

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() showModal!: Observable<boolean>;

  constructor() { }

  ngOnInit(): void {
    this.showModal.subscribe(
      v => {
        if (v) {
          $("#dialog").modal('show');
        } else {
          $("#dialog").modal('hide');
        }
      }
    )
  }
}
