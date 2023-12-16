import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form-component',
  templateUrl: './task-form-component.component.html',
  styleUrls: ['./task-form-component.component.css']
})
export class TaskFormComponentComponent {

  @ViewChild('inputValue') inputValueRef!: ElementRef;
  @Output() itemListUpdated = new EventEmitter<string[]>();

  itemList: string[] = [];
  // inputText: any;

  addList(inputText: string): void {
    console.log(inputText);

    const minimalValue = 3;
    if (inputText.length >= minimalValue) {
      this.itemList.push(inputText);
      this.itemListUpdated.emit(this.itemList);
      this.inputValueRef.nativeElement.value = '';
    } else {
      alert('Please enter more than 3 words');
    }
  }
}
