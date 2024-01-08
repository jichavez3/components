import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooAnimalComponent } from '../zoo-animal/zoo-animal.component';
import { AnimalList } from '../models/AnimalList';
import { ZooService } from '../zoo.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
    selector: 'app-zoo',
    standalone: true,
    templateUrl: './zoo.component.html',
    styleUrl: './zoo.component.css',
    imports: [ZooAnimalComponent, CommonModule, FlexLayoutModule]
})
export class ZooComponent implements OnInit{
  animalList: AnimalList[] = [];

  constructor(private zooService: ZooService) { }

  ngOnInit(): void {
    this.animalList = this.zooService.getAnimals();
  }

  onLike(animal: any): void {
    window.alert(`I like the ${animal.name}!`);
  }
}
