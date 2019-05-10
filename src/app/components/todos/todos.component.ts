import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      { 
        id: 1,
        title: 'Learn Angular',
        completed: false
      },
      { 
        id: 2,
        title: 'Eat Angular',
        completed: true
      },
      { 
        id: 3,
        title: 'Sleep Angular',
        completed: false
      }
    ]
  }
}
//ngOnIniti is like a lifecyle method
//you do not want to use constructor for much
//try to use constructor to import services
 
