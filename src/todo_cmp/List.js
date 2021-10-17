import React from "react";
import Todo from "./item/todo_item";

const List = ({ listItem, removeTodo }) => {
  const renderedList = listItem.map((item) => {
    return (
      <Todo
        text={item.title}
        key={item.title}
        completed={item.completed}
        removeTodo={(e) => removeTodo(item.id)}
      />
    );
  });

  return <div className="ui grid center aligned ">{renderedList}</div>;
};

export default List;
