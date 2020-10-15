import React, { useState, useEffect, useRef } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitForm = () => {
    var user = {
      firstName: firstName,
      lastName: lastname,
      email: email,
      password: password,
    };
    console.log(user);
  };

  return (
    <div>
      <form>
        <label htmlFor="firstName">Fist Name:</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label htmlFor="lastName">lastName</label>
        <input
          type="text"
          id="lastName"
          id="firstName"
          onChange={(e) => {
            setlastname(e.target.value);
          }}
        />
        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          id="firstName"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          id="firstName"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <input type="button" onClick={submitForm} value="제출" />
      </form>
    </div>
  );
};

export default Form;
