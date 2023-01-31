import "./App.css";
import React, { useState } from "react";
import Tasks from "./component/Tasks";
import CreateTask from "./component/CreateTask";
import Progress from "./component/Progress";
import Completed from "./component/Completed";

import { v4 as uuidv4 } from "uuid";

function App() {
  // const [value, setValue] = useState("");
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Grab some Pizza",
      Completed: true,
    },
    {
      id: 2,
      title: "Do your workout",
      Completed: true,
    },
    {
      id: 3,
      title: "Hangout with friends",
      Completed: false,
    },
  ]);

  const addtoCompleted = (id) => {
    const item = inprogress.find((item) => item.id === id);
    setCompleted([item, ...completed]);
    const filterarray = inprogress.filter((item) => item.id !== id);
    setInprogress(filterarray);
  };

  const addToProgress = (id) => {
    const item = tasks.find((x) => x.id === id);
    setInprogress([item, ...inprogress]);
    const filterarray = tasks.filter((x) => x.id !== id);
    setTasks(filterarray);
  };

  const AddTask = (title) => {
    const newTasks = [...tasks, { title, completed: false, id: uuidv4() }];
    setTasks(newTasks);
  };

  const removeTodo = (id) => {
    const remainder = tasks.filter((item) => item.id !== id);
    setTasks(remainder);
  };

  return (
    <div className="App">
      <div>
        <CreateTask AddTask={AddTask} /*value={value} setValue={setValue}*/ />
      </div>
      <div className="container">
        <div className="my-tasks">
          <h1>My Tasks</h1>
          {tasks.map((item) => {
            return (
              <Tasks
                key={item.id}
                item={item}
                removeTodo={removeTodo}
                addToProgress={addToProgress}
              />
            );
          })}
        </div>

        <div>
          <Progress
            inprogress={inprogress}
            setInprogress={setInprogress}
            addtoCompleted={addtoCompleted}
          />
        </div>

        <div className="complit">
          <Completed completed={completed} setCompleted={setCompleted} />
        </div>
      </div>
    </div>
  );
}

export default App;

// <div className="todos_list">
//           <h3 className="todo_title">InProgress</h3>
//           {inprogress.map((item, index) => (
//             <div className="progress_card" key={item.id}>
//               <h1 className="card_text">{item.title}</h1>

//               <button /*onClick={() => addtoCompleted(item.id)}*/></button>
//             </div>
//           ))}
//         </div>
