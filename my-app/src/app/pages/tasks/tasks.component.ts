import { Component, OnInit } from '@angular/core';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})

export class TasksComponent implements OnInit {
  public tasks: Task[] = [];
  public newTask: string = "";

  private getTasks(): Promise<Task[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "Tarefa 1", done: false },
          { id: 2, title: "Tarefa 2", done: true },
          { id: 3, title: "Tarefa 3", done: false },
        ]);
      }, 1000);
    });
  }

  private postDeleteTask(id: number): Promise<Task[]> {
    return new Promise((resolve) => {
      resolve(this.tasks.filter(task => task.id !== id));
    });
  }

  private patchToggleTask(id: number, done: boolean): Promise<void> {
    return new Promise((resolve) => {
      this.tasks.map(t => {
        if (t.id === id) {
          t.done = done;
        }
        return t;
      })
      resolve();
    });
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  private loadTasks(): void {
    this.getTasks().then(data => {
      this.tasks = data;
    });
  }

  public save(): void {
    this.tasks.push({ id: Math.random(), title: this.newTask, done: false });
    this.newTask = "";
  }

  public deleteTask(id: number): void {
    this.postDeleteTask(id).then(data => {
      this.tasks = data;
    });
  }

  public toggleTask(task: Task): void {
    this.patchToggleTask(task.id, !task.done);
  }
}
