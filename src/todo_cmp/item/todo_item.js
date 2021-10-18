import React, { useState } from "react";

const Todo = ({ text, completed, removeTodo }) => {
  console.log(`ini adalah ${text}`);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);
  const [tempVal, setTempVal] = useState(text);
  const [completedState, setCompletedState] = useState(completed);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputKeyDown = (e) => {
    const key = e.keyCode;
    if (key === 13) {
      setValue(tempVal);
      setIsEditing(false);
    } else if (key === 27) {
      setTempVal(value);
      setIsEditing(false);
    }
  };

  const handleInputOnChange = (e) => {
    setTempVal(e.target.value);
  };

  const handleCheckButton = () => {
    setCompletedState(!completedState);
  };

  return (
    <div className="box level my-5">
      {isEditing ? (
        <div className="column seven wide">
          <div className="field">
            <div className="control">
              <input
                className="input"
                onKeyDown={handleInputKeyDown}
                autoFocus={true}
                onChange={handleInputOnChange}
                value={tempVal}
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="level-left">
            <h2
              className={`title has-text-weight-bold is-uppercase has-text-${
                completedState ? "primary" : ""
              }`}
              onDoubleClick={handleDoubleClick}
            >
              {value}
            </h2>
          </div>
          <div className="level-right">
            <div className="block mx-2 my-2">
              <button
                className={`button is-${completedState ? "info" : "primary"}`}
                onClick={handleCheckButton}
              >
                <span className="icon">
                  <i class="fas fa-plus-circle"></i>
                </span>
              </button>
            </div>

            <div className="block mx-2">
              <button className="button is-danger" onClick={removeTodo}>
                <span className="icon">
                  <i class="fas fa-times-circle"></i>
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
