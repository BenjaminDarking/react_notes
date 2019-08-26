import React, { Component } from "react";
import "./App.css";
import ToDos from "./components/ToDo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner",
        completed: false
      },
      {
        id: 3,
        title: "Go for run",
        completed: true
      }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  render() {
    return (
      <div className="App">
        <h1>ToDos</h1>
        <ToDos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
