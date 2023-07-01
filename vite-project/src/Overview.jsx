const Overview = (props) => {
  // takes 'tasks' array from props
  const { tasks, numOfTasks } = props;
  console.log(numOfTasks);
  
  return (
    <ul>
      {tasks.map((task) => {
        return <ul> {task.num}. {task.text} </ul>;
      })}
    </ul>
  );
};

export default Overview;
