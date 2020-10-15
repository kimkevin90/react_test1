import React, { useState, useEffect, useRef } from "react";
import Task from "./Task";
const ToDo = () => {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [taskList, setTaskList] = useState([]);

  //구조 addTask 누르면 taskName이 e.target에 의해 변경되고
  //setTaskList 안에 들어가게된다.
  //이후 taskList를 맵함수 돌면서 하나씩 꺼냄
  const addTask = () => {
    setTaskList([...taskList, { task: taskName, time: time }]);
    setTaskName("");
    setTime("");
    console.log([...taskList]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <label>Task Name:</label>
      <input
        type="text"
        id="task"
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      />
      <label>Time:</label>
      <input
        type="text"
        id="time"
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
      {/* <h1>{taskName}</h1>
      <h1>{time}</h1> */}
      <button onClick={addTask}>add</button>
      {taskList.map((task) => {
        return <Task taskName={task.task} time={task.time} />;
      })}
    </div>
  );
};

export default ToDo;
