export const Tasks = (props) => {
  return (
    <div
      className="taskdisplay"
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <button onClick={() => props.completedTask(props.id)}>Completed</button>
      <h2>{props.taskName}</h2>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};
