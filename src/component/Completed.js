import React from "react";

function Completed(props) {
  return (
    <div className="complete">
      <h3 className="todo_title">Completed</h3>
      {props.completed.map((item, index) => (
        <div className="progress_card" key={item.id}>
          <p className="card_text">{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Completed;
