import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  //components mucst go in the declarations
  //all components will have a Typescript file
  //the CLI will put it in declarations for you
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent
  ],
  //modules will go here and you will have to add 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  //providers has to do with services you want to include
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//This is the entryway to angular
//angular is comprised of different modules

