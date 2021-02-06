import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/_module/person';
import { userCountry } from 'src/app/_module/user-country';
import { UserCountryService } from 'src/app/_services/user-country.service';
import { LoginComponent } from'src/app/auth/login/login.component'

@Component({
  selector: 'app-continue-sign-up1',
  templateUrl: './continue-sign-up1.component.html',
  styleUrls: ['./continue-sign-up1.component.css']
})
export class ContinueSignUp1Component implements OnInit {

  person: Person = { email: '', country:{}};
  userCountry: userCountry[]=[];

  constructor(private userCountryService: UserCountryService) { }

  ngOnInit(): void {
    this.userCountry = this.userCountryService.getAllCountry();
    console.log(this.userCountry);    
  }

  // onsub(){
  //   console.log(this.person);
  // }

  onSubmit(form) {
    console.log(form.value);
    console.log(this.person);

    
  }
  

}
