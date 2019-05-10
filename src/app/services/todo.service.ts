import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=9';

  constructor(private http:HttpClient) { }

  //Get Todos
  getTodos():Observable<Todo[]> {
    //a GET request that is going to return an obervable
    return this.http.get<Todo[]>(`${ this.todosUrl }${ this.todosLimit }`);
  }
  
  //Delete Todo
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${ this.todosUrl }/${ todo.id }`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  //Add Todo 
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  //Toggle Completed (we are making a PUT req here)
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${ this.todosUrl }/${ todo.id }`;
    return this.http.put(url, todo, httpOptions);
  }
 
}
