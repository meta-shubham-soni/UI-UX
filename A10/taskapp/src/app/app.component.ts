import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<section class="todoapp">
//   <header class="header">
//     <h1>Todos</h1>
//     <input class="new-todo" [(ngModel)]="newTodo.title"  placeholder="What needs to be done?" 
//      autofocus="" (keyup.enter)="addTodo()">
//   </header>
//   <section class="main" *ngIf="todos.length > 0">
//     <ul class="todo-list">
//       <li *ngFor="let todo of todos" [class.completed]="todo.complete">
//         <div class="view">
//           <input class="toggle" type="checkbox" (click)="toggleTodoComplete(todo)" [checked]="todo.complete">
//           <label>{{todo.title}}</label>
//           <button class="destroy" (click)="removeTodo(todo)"></button>
//         </div>
//       </li>
//     </ul>
//   </section>
//   <footer class="footer" *ngIf="todos.length > 0">
//     <span class="todo-count"><strong>{{todos.length}}</strong> {{todos.length == 1 ? 'item' : 'items'}} left</span>
//   </footer>
// </section>`,
  styleUrls: ['./app.component.css'],
  providers : [TodoDataService]

})
export class AppComponent {
  newTodo: Todo = new Todo();
  // myModel: any;
  constructor(private todoDataService: TodoDataService) {
  }


  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }


}
