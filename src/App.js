import { useState, useEffect } from "react";
import Form from "./todo_cmp/Form";
import Section from "./todo_cmp/Section";
import List from "./todo_cmp/List";
import todos from "./apis";

const title = "To-Do App";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await todos.get("/todos");
      setList(data);
    };

    fetchData();
  }, []);

  const addTodo = async (item) => {
    const { data } = await todos.post("/todos", item);
    setList((oldList) => {
      return [...oldList, data];
    });
  };

  const removeTodo = async (id) => {
    await todos.delete(`/todos/${id}`);
    setList((oldList) => {
      return oldList.filter((item) => item._id !== id);
    });
  };

  const editTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
  };

  return (
    <div className="container box my-6">
      <Section>
        <h1 className="title has-text-centered is-size-2 mb-5">{title}</h1>
      </Section>

      <Section>
        <Form addTodo={addTodo} />
      </Section>

      <Section>
        <List listItem={list} removeTodo={removeTodo} editTodo={editTodo} />
      </Section>
    </div>
  );
};

export default App;
