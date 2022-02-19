import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if(value >= 1){
        document.title = `New Message ${value}`;
    }
  },[value]);

  // this use effect runs in initial run
  useEffect(() => {
    console.log("hello world!");
  }, []);


  console.log("render components");
  return (
    <>
      <p>{value}</p>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click
      </button>
    </>
  );
};

export default UseEffectBasics;
