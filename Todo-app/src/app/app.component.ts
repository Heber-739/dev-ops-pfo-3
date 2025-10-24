import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { Todo } from './main/home/interface/todo.interface';
import { initializate } from './main/home/ngrx/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private http: HttpClient,
    private store:Store
  ) {
    this.getTodos();
  }

  private async getTodos(){
    await firstValueFrom(this.http.get<Todo[]>('assets/todos.json'))
    .then((todos)=> this.store.dispatch(initializate({todos})));
  }


}
