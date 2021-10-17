import Header from "./components/Header";
import Counter from "./components/Counter";
import Button from "./components/Button";
import Form from "./components/Form";
import Test from "./components/Test";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="ui grid container center aligned">
      <div className="column eight wide">
        <Search />
      </div>
    </div>
  );
};

export default App;
