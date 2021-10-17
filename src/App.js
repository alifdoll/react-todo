import { useState } from "react";
import Form from "./todo_cmp/Form";
import Section from "./todo_cmp/Section";
import List from "./todo_cmp/List";

const title = "To-Do App";

const todoList = [
  { id: 1, title: "Test #1", completed: false },
  { id: 2, title: "Test #2", completed: false },
  { id: 3, title: "Test #3", completed: true },
];

const App = () => {
  const [list, setList] = useState(todoList);

  const addTodo = (item) => {
    setList((oldList) => {
      console.log(oldList);
      return [...oldList, item];
    });
  };

  const removeTodo = (id) => {
    setList((oldList) => {
      console.log(`id deleted ${id}`);
      return oldList.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="ui container center aligned">
      <Section>
        <h1>{title}</h1>
      </Section>

      <Section>
        <Form addTodo={addTodo} />
      </Section>

      <Section>
        <List listItem={list} removeTodo={removeTodo} />
      </Section>
    </div>
  );
};

export default App;
