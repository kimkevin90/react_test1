import React from "react";

export default function Task({ taskName, time }) {
  return (
    <div className="task">
      <h1>TaskName: {taskName}</h1>
      <h1>time: {time}</h1>
    </div>
  );
}
