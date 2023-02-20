import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearch}></SearchBox>
        <CardList items={filteredRobots}></CardList>
      </div>
    );
  }

  onSearch = (event) => {
    this.setState({ searchField: event.target.value });
  };
}

export default App;
