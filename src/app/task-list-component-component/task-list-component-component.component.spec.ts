import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponentComponentComponent } from './task-list-component-component.component';

describe('TaskListComponentComponentComponent', () => {
  let component: TaskListComponentComponentComponent;
  let fixture: ComponentFixture<TaskListComponentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListComponentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListComponentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
