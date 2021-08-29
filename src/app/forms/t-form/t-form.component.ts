import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-form',
  templateUrl: './t-form.component.html',
  styleUrls: ['./t-form.component.scss']
})
export class TFormComponent implements OnInit {
  username = 'default';
  password = 'password';
  remember = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formData = {
      username: this.username,
      password: this.password,
      remember: this.remember
    }
    console.log('form data', formData);
  }

}
