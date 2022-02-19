import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random Message",
  });

  const [name, setName] = useState("shubham");
  const [age, setAge] = useState(23);
  const [message, setMessage] = useState("some Message");

  const changeMessage = () => {
    // setPerson({ ...person, message: "Hello World" });
    if(message === 'some Message'){
        setMessage("hello world");
    }
    else {
        setMessage("some Message");
    }
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>{message}</h4>

      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
