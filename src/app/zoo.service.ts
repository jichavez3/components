import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZooService {

  constructor() { }

  getAnimals() {
    return [
      {
        id: 1,
        name: 'Animal1',
        fed: true
      },
      {
        id: 2,
        name: 'Animal2',
        fed: false
      },
      {
        id: 3,
        name: 'Animal3',
        fed: true
      }
    ];
  }
}
