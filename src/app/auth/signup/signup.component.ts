import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/_module/person';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  person: Person = { userNameOrEmail: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
