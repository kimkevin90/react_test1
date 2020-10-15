import React, { useState, useEffect, useRef } from "react";

const UseEffect = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("page rendered");
  }, [number]);

  return (
    <div style={{ fontSize: 30 }}>
      {number}
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        increase number
      </button>
    </div>
  );
};

export default UseEffect;
