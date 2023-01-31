import React from "react";

function Progress(props) {
  return (
    <div className="todos_list">
      <h3 className="todo_title">InProgress</h3>
      {props.inprogress.map((item, index) => (
        <div className="progress_card" key={item.id}>
          <p className="card_text">{item.title}</p>
          <button onClick={() => props.addtoCompleted(item.id)}>✓</button>
        </div>
      ))}
    </div>
  );
}

export default Progress;
