import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list-component-component',
  templateUrl: './task-list-component-component.component.html',
  styleUrls: ['./task-list-component-component.component.css']
})
export class TaskListComponentComponentComponent {

  itemList: string[] = [];

  onItemListUpdated(updatedList: string[]): void {
      this.itemList = updatedList;
      console.log(this.itemList);
      
  }
}
