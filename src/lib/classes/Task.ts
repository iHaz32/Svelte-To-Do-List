import type Date from "./Date";

class Task {
  // properties
  title: String;
  description: String;
  dueDate: Date;
  completed: boolean;

  // constructor
  constructor(title: String, description: String, dueDate: Date, completed = false) {
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.dueDate = dueDate;
  }

  // methods
  toggleCompleted() {
    this.completed = !this.completed;
  }
}
  
export default Task;