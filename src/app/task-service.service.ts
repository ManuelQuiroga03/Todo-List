import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private tasks: any[] = [];

  constructor() { }

  getTasks(): any[] {
    return this.tasks;
  }

  addTask(newTask: any): void{
    this.tasks.push(newTask);
  }

  deleteTask(index: number): void{
    this.tasks.splice(index, 1);
  }

  editTask(index: number){

  }

  finishTask(index: number){
    
  }
}
