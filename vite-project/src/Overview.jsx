const Overview = (props) => {
  // takes 'tasks' array from props
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.text}</li>;
      })}
    </ul>
  );
};

export default Overview;
