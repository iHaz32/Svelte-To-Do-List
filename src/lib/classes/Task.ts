class Task {
  // properties
  title: string;
  editing: boolean;

  // constructor
  constructor(title: string) {
    this.title = title;
    this.editing = false;
  }
}
  
export default Task;