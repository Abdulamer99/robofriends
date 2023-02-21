import React, { Component } from "react";
import CardList from "./CardList";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    if (this.state.robots.length === 0) {
      return <h1 className="tc">Loading..</h1>;
    }
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearch} />
        <Scroll>
          <CardList items={filteredRobots}></CardList>
        </Scroll>
      </div>
    );
  }

  onSearch = (event) => {
    this.setState({ searchField: event.target.value });
  };
}

export default App;
