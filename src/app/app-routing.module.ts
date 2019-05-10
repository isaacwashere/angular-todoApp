import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/pages/about/about.component'; 

//anything we want to add as a route we have to bring in

const routes: Routes = [
  //we want the TodosComponet to be the root so leave path blank
  { path: '', component: TodosComponent },
  //now, if you go to [website]/about the About component will show
  { path: 'about', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
