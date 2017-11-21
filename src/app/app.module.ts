import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RecipeList } from './recipes/recipe.list/recipe.list.component';
import { RecipeItem } from './recipes/recipe.item/recipe.item.component';
import { RecipeDetail } from './recipes/recipe.detail/recipe.detail.component';

import { ShoppingList } from './shopping.list/shopping.list.component';
import { ShoppingListEdit } from './shopping.list/shopping.edit/shopping.edit.component';
import { RecipesComponent } from './recipes/recipes.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeList,
    RecipeItem,
    RecipeDetail,
    ShoppingList,
    ShoppingListEdit,
    RecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
