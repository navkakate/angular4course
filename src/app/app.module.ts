import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeList } from './recipe.book/recipe.list/recipe.list.component';
import { RecipeItem } from './recipe.book/recipe.item/recipe.item.component';
import { RecipeDetail } from './recipe.book/recipe.detail/recipe.detail.component';
import { ShoppingList } from './shopping.list/shopping.list/shopping.list.component';
import { ShoppingListEdit } from './shopping.list/shopping.list.edit/shopping.list.edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeList,
    RecipeItem,
    RecipeDetail,
    ShoppingList,
    ShoppingListEdit
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
