import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-t-form',
  templateUrl: './t-form.component.html',
  styleUrls: ['./t-form.component.scss']
})
export class TFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Invalid form, cannot submit');
    } else {
      console.log('form data', form.value);
    }

    //  all in one approach
    // if (form.invalid) {
    //   let errors = '';
    //
    //   for (const ctrl in form.form.controls) {
    //     errors += ctrl + ' >> ' + JSON.stringify(form.controls[ctrl].errors) + '\n';
    //   }
    //
    //   alert(errors);
    // } else {
    //   console.log('form data', form.value);
    // }

  }

  showErrors(form: FormGroup) {
    for (const ctrl in form.controls) {
      console.log(ctrl, form.controls[ctrl].errors);
    }
  }

}
