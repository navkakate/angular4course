import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe.list.component.html',
  styleUrls: ['./recipe.list.component.css']
})
export class RecipeList implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Choc-Chip-Cookie.jpg/1024px-Choc-Chip-Cookie.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Choc-Chip-Cookie.jpg/1024px-Choc-Chip-Cookie.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
