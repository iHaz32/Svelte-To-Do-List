class Task {
  // properties
  title: String;
  completed: boolean;

  // constructor
  constructor(title: String) {
    this.title = title;
    this.completed = false;
  }

  // methods
  toggleCompleted() {
    this.completed = !this.completed;
  }
}
  
export default Task;