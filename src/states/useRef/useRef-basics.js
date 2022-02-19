import React, { useRef, useEffect } from "react";

const UseRefBasics = () => {
  const refContanier = useRef(null);

  const handleSubit = (e) => {
    e.preventDefault();
    console.log(refContanier.current.value);
  };

  useEffect(() => {
    console.log(refContanier.current);
    refContanier.current.focus();
  });

  return (
      <div>
          <form className="form" onSubmit={handleSubit}>
              <div>
                  <input type="text" ref={refContanier}/>
              </div>
              <button type="submit">Submit</button>
          </form>
      </div>
  );
};

export default UseRefBasics;
