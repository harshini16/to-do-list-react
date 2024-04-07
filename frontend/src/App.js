import { useState } from "react";
import "./App.css";

function App() {
  // holds all the tasks
  const [toDoList, setToDoList] = useState([]);
  // represents the user input
  const [newtask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newtask,
    };
    setToDoList([...toDoList, task]);
  };
  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };
  return (
    <div className="App">
      <div className="task">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add New Task</button>
      </div>
      <div className="taskdisplay">
        {toDoList.map((task) => {
          return (
            <div>
              <h2>{task.taskName}</h2>
              <button onClick={() => deleteTask(task.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
