import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setInputValue("");
      return;
    }
    addTodo({ title: inputValue, completed: false });
    setInputValue("");
  };

  return (
    <form className="ui form" onSubmit={handlerFormSubmit}>
      <div className="ui grid center aligned">
        <div className="row">
          <div className="column five wide">
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter a text ..."
            />
          </div>
          <div className="column one wide">
            <button type="submit" className="ui button circular icon green">
              <i className="plus icon white"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
