import React, { useState } from "react";

const Hello = () => {
  const username = "jisub123";
  const password = "jisub111";

  const [usernameState, setUsernameState] = useState("111");
  const [passwordeState, setPasswordState] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    if (usernameState === username && passwordeState === password) {
      setLoggedIn(true);
    }
  }
  return (
    <div className="App">
      <h1>{usernameState}</h1>
      <input
        type="text"
        onChange={(event) => {
          setUsernameState(event.target.value);
          // console.log(event.target.value);
        }}
      />
      <input
        type="password"
        onChange={(event) => {
          setPasswordState(event.target.value);
          // console.log(event.target.value);
        }}
      />
      <button onClick={login}>Submit</button>

      {loggedIn && <h1>Logged In</h1>}
    </div>
  );
};

export default Hello;
