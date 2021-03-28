import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../app.component';


@Component({
  selector: 'app-task',
  template: `
  <li>
  <div [class.complete]="task.isComplete">
    <input type="checkbox" [(ngModel)]="task.isComplete"> 
    
    {{ task.taskText }} 
    <span (click)="deleteTask()"><i class="fa fa-ban"></i></span>
  </div>
  </li>
  `,
  styles: [
    `.complete {
      color: darkgreen;
      opacity: 0.5;
      text-decoration: line-through;
    }
    `
  ]
})
export class TaskComponent implements OnInit {
  @Input() public task: Task;
  @Output() public rekt: EventEmitter<void> = new EventEmitter();
  constructor() { }

  public deleteTask():void {
    this.rekt.emit()
  }

  ngOnInit(): void {
  }

}


