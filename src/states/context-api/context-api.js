import React, { useState, useContext } from "react";
import { data } from "./../../data";

const PersonContext = React.createContext();
// two component - provide, consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((people) => people.id != id);
    });
  };

  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <div>
        <h3>context API / use Context</h3>
      </div>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
    const { people } = useContext(PersonContext);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
