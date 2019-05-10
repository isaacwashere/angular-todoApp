import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
    //Removes from the UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //Removes from the server
    this.todoService.deleteTodo(todo).subscribe();
  }
 
  addTodo(todo:Todo) {
    //1st make a POST req to the server via the service
    //once we get the observable/response back we are going to 
    //add it to the UI
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });    
  }
} 
//ngOnIniti is like a lifecyle method
//you do not want to use constructor for much
//try to use constructor to import services

//you subscribe to the observable
 //.subscribe is similar to .then
