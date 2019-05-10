import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  //we are using any because there is no "id" 
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      //no "id" because the jsonplaceholder will create it for you
      title: this.title,
      completed: false
    }
    console.log(todo);
    //have to emit this upward because need access to the 
    //direct todos in the todo component
    this.addTodo.emit(todo);
  }
}
