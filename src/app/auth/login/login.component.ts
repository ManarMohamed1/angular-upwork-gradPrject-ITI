import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/_module/person';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  person: Person = { email: '', country: {} };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(form.value);
  }
}
