import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponentComponentComponent } from './task-list-component-component/task-list-component-component.component';
import { TaskFormComponentComponent } from './task-form-component/task-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponentComponentComponent,
    TaskFormComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
