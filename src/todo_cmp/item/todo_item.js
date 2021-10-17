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
    <div className="row ui segment">
      {isEditing ? (
        <div className="column seven wide">
          <div className="ui input fluid">
            <input
              onKeyDown={handleInputKeyDown}
              autoFocus={true}
              onChange={handleInputOnChange}
              value={tempVal}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="column five wide  ">
            <h2
              className={`ui header ${completedState ? "green" : ""}`}
              onDoubleClick={handleDoubleClick}
            >
              {value}
            </h2>
          </div>
          <div className="column one wide">
            <button
              className={`ui button circular icon ${
                completedState ? "blue" : "green"
              }`}
              onClick={handleCheckButton}
            >
              <i className="white check icon"></i>
            </button>
          </div>

          <div className="column one wide">
            <button
              className="ui button circular icon red"
              onClick={removeTodo}
            >
              <i className="white x icon"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
