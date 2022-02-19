import React, { useReducer, useState } from "react";
import Modal from "./modal";
import { data } from "./../../data";
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      console.log(newItem);
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
    });
  };

  return (
    <div>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((people) => {
        return (
          <div key={people.id} className="item">
            <h2>{people.name}</h2>
            <button
              type="btn"
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: people.id });
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
