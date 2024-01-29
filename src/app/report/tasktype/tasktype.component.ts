import { Component } from '@angular/core';

@Component({
  selector: 'app-tasktype',
  templateUrl: './tasktype.component.html',
  styleUrl: './tasktype.component.css'
})
export class TasktypeComponent {
  selectedTaskType: string = 'all'; // Initialize with 'all' to show all tasks initially
  
  tasks = [
    { id: 101, name: 'Image button', userId: 1001, taskType: 'Issue', owner: 'Shruti', startDate: '10.01.24', dueDate: '20.01.24' },
    { id: 102, name: 'Comment button', userId: 1002, taskType: 'Bug', owner: 'Priyanka', startDate: '10.01.24', dueDate: '20.01.24' },
    { id: 103, name: 'Textbox', userId: 1002, taskType: 'Create', owner: 'Priyanka', startDate: '10.01.24', dueDate: '21.01.24' },
    { id: 104, name: 'Likes', userId: 1002, taskType: 'Features', owner: 'Priyanka', startDate: '10.01.24', dueDate: '22.01.24' },
    { id: 105, name: 'Notes', userId: 1002, taskType: 'Bug', owner: 'Priyanka', startDate: '10.01.24', dueDate: '24.01.24' },
    // Add other tasks as needed
  ];

  ngOnInit() {
    // Call getFilteredTasks here if additional setup is needed
    // this.getFilteredTasks();
  }

  showAllTasks() {
    this.selectedTaskType = 'all';
  }
  
  getFilteredTasks(): any[] {
    if (this.selectedTaskType.toLowerCase() === 'all') {
      return this.tasks;
    } else {
      // Filter tasks based on the selected task type
      const filtered = this.tasks.filter(task => task.taskType.toLowerCase() === this.selectedTaskType.toLowerCase());
      return filtered.length > 0 ? filtered : [];
    }
  }

}
