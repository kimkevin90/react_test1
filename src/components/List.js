import React, { useState } from "react";

const List = () => {
  const [name, setname] = useState("");
  const [listName, setListName] = useState([]);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setname(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setListName([...listName, name]);
          setname("");
          // console.log(listName);
        }}
      >
        Add name
      </button>

      {listName.map((value, index) => {
        return <h1 key={index}>{value}</h1>;
      })}
    </div>
  );
};

export default List;
