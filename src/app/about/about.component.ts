import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  country!:string;
  year!:number;
  private yearRegEx = /^[2][01][0-9][0-9]$/;

  constructor(private ar: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ar.queryParams.subscribe(
      v => {
        this.country = v.country;
        if (v.year) {
          if (this.yearRegEx.test(v.year)) {
            this.year = parseInt(v.year);
          } else {
            alert('invalid year: ' + v.year);
            this.router.navigate(['not-found'], {
              queryParams: {
                foo: 'tango',
                bar: 'mango',
                baz: 'lingo'
              },
              fragment: 'fragment-here'
            });
          }
        }
      }
    );

    // const country = this.ar.snapshot.paramMap.get('country');
    //
    // console.log('Country', country);
  }
}
