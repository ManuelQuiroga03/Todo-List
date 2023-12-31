interface Task {
  name: string;
  status: boolean;
}

import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-list-component-component',
  templateUrl: './task-list-component-component.component.html',
  styleUrls: ['./task-list-component-component.component.css']
})
export class TaskListComponentComponentComponent implements OnInit {

  tasks: Task[] = [];
  taskStatus: boolean[] = [];
  constructor(private taskService: TaskServiceService){}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(index: number): void{
    this.taskService.deleteTask(index);
    this.tasks = this.taskService.getTasks();
  }

  // editTask(index: number){

  // }

  finishTask(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.taskService.finishTask(index); 
    }
  }

}
