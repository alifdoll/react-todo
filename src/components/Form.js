import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = { name: "Your name" };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let name = this.state.name;
    alert(`hey ${name}`);
  };

  handleInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            id="name"
            placeholder={this.state.name}
            onChange={this.handleInputChange}
          />
          <input type="submit" id="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
