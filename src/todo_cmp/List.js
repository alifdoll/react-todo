import React from "react";
import Todo from "./item/todo_item";

const List = ({ listItem, removeTodo, editTodo }) => {
  const renderedList = listItem.map((item) => {
    return (
      <Todo
        text={item.title}
        key={item._id}
        completed={item.completed}
        removeTodo={() => removeTodo(item._id)}
        editTodo={(updatedItem) => editTodo(item._id, updatedItem)}
      />
    );
  });

  return <div className="ui grid center aligned ">{renderedList}</div>;
};

export default List;
