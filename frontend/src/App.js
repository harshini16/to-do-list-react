import { useState } from "react";
import "./App.css";
import { Tasks } from "./Tasks";

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
      completed: false,
    };
    setToDoList([...toDoList, task]);
  };
  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  const completedTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
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
            <Tasks
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
              completed={task.completed}
              completedTask={completedTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
