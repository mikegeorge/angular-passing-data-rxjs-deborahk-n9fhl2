/*
  This example demonstrates how to build an Observable stream for a query parameter,
  then "pass" that parameter to an http get request, 
  returning the todo's for a particular user.
*/
import { Component } from '@angular/core';

import { UserService } from './user.service';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  // All of the users
  users$ = this.userService.users$;

  // TODOs for the user
  todos$ = this.todoService.todosForUser$;

  constructor(private userService: UserService,
    private todoService: TodoService) { }

  onSelected(userId: number): void {
    this.userService.selectedUserChanged(userId);
  }
}
