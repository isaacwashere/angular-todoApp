import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//^THAT is called a decorator and includes metadata for the component
//CLI will create selector for you 

export class AppComponent {
  title:string = 'Todo';
 
}
//^Allows you to put dynamic content in the app
//connects with the corresponding HTML file
//all templates(like the corresponding HTML file) need to be wrapped in a single element
