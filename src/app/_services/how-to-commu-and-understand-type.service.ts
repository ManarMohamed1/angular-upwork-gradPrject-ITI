import { Injectable } from '@angular/core';
import { howToCommuAndUnderstandType } from '../_module/howToCommuAndUnderstand';

@Injectable({
  providedIn: 'root'
})
export class HowToCommuAndUnderstandTypeService {

  howToCommuAndUnderstandType: howToCommuAndUnderstandType[]=[
    { id: 1, name: ' Yes! Send me genuinely useful emails' },
    { id: 2, name: 'Yes, I understand and agree' },
  ];
  getAllHowToCommuAndUnderstandType(): howToCommuAndUnderstandType[] {
    return this.howToCommuAndUnderstandType.slice();
  }
  constructor() { }
}
