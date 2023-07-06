class Task {
  // properties
  title: String;
  completed: boolean;
  editing: boolean;

  // constructor
  constructor(title: String) {
    this.title = title;
    this.completed = false;
    this.editing = false;
  }

  // methods
  toggleCompleted() {
    this.completed = !this.completed;
  }
}
  
export default Task;