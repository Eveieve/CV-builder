import { Component } from "react";
import uniqid from "uniqid";
import Overview from "./Overview";

class App extends Component {
  constructor() {
    super();
    // declare state
    this.state = {
      task: { text: "", id: uniqid() },
      // put tasks in the tasks array
      tasks: [],
      numOfTasks: this.tasks?.length, // NumOf items
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
      },
    });
    console.log(this.state);
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState(
      {
        // returns new array with the new added task
        tasks: this.state.tasks.concat(this.state.task),
        // then set the task.text to be empty again, like how it was in the first place
        task: {
          text: "",
          id: uniqid(),
        },
      },
      () => console.log(this.state.tasks)
    );
    // console.log(this.state.tasks);
  };

  render() {
    // unpacking task prop and tasks prop from the state object
    const { task, tasks, numOfTasks } = this.state;

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
          <Overview tasks={tasks} numOfTasks={numOfTasks} />
        </form>
      </div>
    );
  }
}

export default App;
