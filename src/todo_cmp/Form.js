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
    <form
      className="block columns is-centered is-variable is-3"
      onSubmit={handlerFormSubmit}
    >
      <div className="column flex-wrap is-10">
        <div className="control">
          <input
            className="input is-large"
            value={inputValue}
            onChange={handleInputChange}
            type="text"
            placeholder="Enter a text ..."
          />
        </div>
      </div>
      <div className="column flex-wrap">
        <div className="control">
          <div className="column">
            <button type="submit" className="button is-primary">
              <span className="icon">
                <i class="fas fa-plus-circle"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
