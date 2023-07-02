const Overview = (props) => {
  // unpacking properties of the object passed down from the parent 
  const { tasks } = props;
  
  return (
    <ul>
      {tasks.map((task) => {
        return <p key = {task.id}> {task.num}. {task.text} </p>;
      })}
    </ul>
  );
};

export default Overview;
