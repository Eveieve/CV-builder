import { Component } from "react";
import uniqid from "uniqid";
import Overview from "./Overview";

class App extends Component {
  constructor() {
    super();
    // declare state
    this.count = 1;
    this.state = {
      task: { text: "", id: uniqid(), num: this.count },
      
      tasks: [],
      // numOfTasks: this.tasks?.length, // NumOf items
    };
  }
  // handle change in the input field
  // by setStating the state
  // new state.task in as an argument
  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        num: this.count,
      },
    });
    console.log(this.state);
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState(
      {
       
        tasks: this.state.tasks.concat(this.state.task),
       
        task: {
          text: "",
          id: uniqid(),
          num: this.count++,
        },
      },
      () => console.log(this.state.tasks)
    );
    
  };

  render() {
    // unpacking task prop and tasks prop from the state object
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask} type="submit">
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text} // value of input
            id="taskInput"
          />

          <button type="submit">Add Task</button>
          <Overview tasks={tasks}  num = {task.num}/>
        </form>
      </div>
    );
  }
}

export default App;
