const Overview = (props) => {
  // takes 'tasks' array from props
  const { tasks, numOfTasks } = props;
  console.log(numOfTasks);
  return (
    <ul>
      {tasks.map((task) => {
        return <p> {numOfTasks}</p>;
      })}
    </ul>
  );
};

export default Overview;
