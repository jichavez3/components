import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  name: string = 'lemonade';
  ingredient1: string = 'lemon';
  ingredient2: string = 'water';
  ingredient3: string = 'sugar';

  constructor() {};
}
