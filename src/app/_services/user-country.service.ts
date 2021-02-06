import { Injectable } from '@angular/core';
import { userCountry } from '../_module/user-country';

@Injectable({
  providedIn: 'root'
})
export class UserCountryService {

  userCountry: userCountry[] = [
    { id: '1', name: 'Egypt' },
    { id: '2', name: 'Algeria' },
    { id: '3', name: 'Lebnanon' },
    { id: '4', name: 'Angola' },
    { id: '5', name: 'Andorra' },
  ];

  getAllCountry(): userCountry[] {
    return this.userCountry.slice();
  }

  constructor() { }
}
