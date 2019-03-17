import React, { Component } from 'react';
import NavbarView from "./components/navbar/navbar";
import Header from "./components/header/header";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <NavbarView/>
      </div>
    );
  }
}

export default App;
