import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zoo-animal',
  standalone: true,
  imports: [],
  templateUrl: './zoo-animal.component.html',
  styleUrl: './zoo-animal.component.css'
})
export class ZooAnimalComponent {
  @Input() animal;
  @Output() liked = new EventEmitter();

  constructor() {
    this.animal = {
      id: 1,
      name: 'Panda',
      fed: true
    };
  }

}
