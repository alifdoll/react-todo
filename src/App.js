import Header from "./components/Header";
import Counter from "./components/Counter";
import Button from "./components/Button";
import Form from "./components/Form";
import Test from "./components/Test";
import axios from "axios";

const App = () => {
  return (
    <>
      <Header text="Click It!!" />
      <Counter label="This is a Button" />
    </>
  );
};

export default App;
