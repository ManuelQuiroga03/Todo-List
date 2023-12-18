interface Task {
  name: string;
  status: boolean;
}

import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-form-component',
  templateUrl: './task-form-component.component.html',
  styleUrls: ['./task-form-component.component.css']
})
export class TaskFormComponentComponent {

  @ViewChild('inputValue') inputValueRef!: ElementRef;
  @Output() itemListUpdated = new EventEmitter<string[]>();

  itemList: Task[] = [];
  // inputText: any;

  constructor(private taskService: TaskServiceService){}

  addList(inputText: string): void {
    const minimalValue = 3;
    if (inputText.length >= minimalValue) {
      const newTask: Task = {
        name: inputText,
        status: false // Estado inicial, puedes ajustarlo según necesites
      };
  
      this.taskService.addTask(newTask);
      this.itemList = this.taskService.getTasks();
      this.inputValueRef.nativeElement.value = '';
    } else {
      alert('Please enter more than 3 words');
    }
  }
  

  // addList(inputText: string): void {
  //   const minimalValue = 3;
  //   if (inputText.length >= minimalValue) {
  //     this.itemList.push(inputText);
  //     this.itemListUpdated.emit(this.itemList);
  //     this.inputValueRef.nativeElement.value = '';
  //   } else {
  //     alert('Please enter more than 3 words');
  //   }
  // }
}
