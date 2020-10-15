import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const input = useRef(null);

  const changePlaceholder = () => {
    // input.current.placeholder = "youtube";
    // input.current.focus();
    input.current.value = "hi";
  };

  return (
    <div>
      <input type="text" value="wassup" ref={input} />
      <button onClick={changePlaceholder}>change</button>
    </div>
  );
};

export default UseRef;
