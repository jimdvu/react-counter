import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

class Counter extends Component{

  state={
    count: 0
  };

  handleClick = () => {
    this.setState(( {count}) => ({
      count: count + 1
    }));
  };

  render(){
    return <button onClick = {this.handleClick}>{this.state.count}</button>;
  }
}

export default App;
