interface Task {
  name: string;
  status: boolean;
}

import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private tasks: any[] = [];
  // private taskToEdit: string = '';

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(newTask: Task): void{
    console.log(newTask);
    
    this.tasks.push(newTask);
  }

  deleteTask(index: number): void{
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la tarea. ¿Estás seguro que deseas continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tasks.splice(index, 1);
        Swal.fire(
          'Eliminado',
          'La tarea ha sido eliminada.',
          'success'
        );
      }
    });
  }

  // setTaskToEdit(nombreTarea: string): void {
  //   this.taskToEdit = nombreTarea;
  // }

  // getTaskToEdit(): string {
  //   return this.taskToEdit;
  // }

  // editTask(index: number, nuevoNombre: string){
  //   if (index >= 0 && index < this.tasks.length) {
  //     this.tasks[index] = nuevoNombre;
  //   }
  // }
  

  finishTask(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].status = true; 
    }
  }
  
}
