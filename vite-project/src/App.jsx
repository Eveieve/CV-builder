import { Component } from "react";
import uniqid from "uniqid";
import Overview from "./Overview";

class App extends Component {
  constructor() {
    super();
    // defining variables in the constructor 
    this.count = 1;

    this.state = {
      task: { text: "", 
      id: uniqid(),
      num: this.count },

      tasks: [],
    };
  }
 // out of constructor - define methods 
 // set the task.text value to: the target element's value 
 // handle change of the input field (manage the state of it by the parent(App))
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
    // this.count++;
    this.setState(
      {
        tasks: this.state.tasks.concat(this.state.task),
        task: {
          text: "",
          id: uniqid(),
          // num: this.count++, //? 
          // num: this.count,
          num: ++this.count,
        },
      }
    );
    console.log(this.state);
  };

  render() {
   
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask} type="submit">
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text} 
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
