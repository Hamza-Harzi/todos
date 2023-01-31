import React from "react";

function Tasks(props) {
  return (
    <div>
      <div>
        <ul>
          <li>{props.item.title}</li>
        </ul>
      </div>
      <div>
        <button
          onClick={() => props.removeTodo(props.item.id)}
          variant="danger"
        >
          X
        </button>
        <button onClick={() => props.addToProgress(props.item.id)}>✓</button>
      </div>
    </div>
  );
}

export default Tasks;
