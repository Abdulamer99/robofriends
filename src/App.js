import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";

const App = () => {
  return <CardList items={robots}></CardList>;
};

export default App;
