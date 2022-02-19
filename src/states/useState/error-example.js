import React from "react";

const ErrorExample = () => {
  let title = "some different title";

  const handleClick = () => {
    title = "hello people";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
