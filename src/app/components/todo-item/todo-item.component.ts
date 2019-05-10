import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo'
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  //Set Dynamic Classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo) {
    //Toggle's the UI
    todo.completed = !todo.completed;
    //Toggle's on the server
    this.todoService.toggleCompleted(todo).subscribe(todo => 
      console.log(todo)
    );
  }

  onDelete(todo) {
    console.log('delete');
  }

}
 
 
 
  
