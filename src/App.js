import React, { Component } from "react";
import "./App.css";
import ToDos from "./components/ToDo";
import Header from "./components/layout/Header";
import AddToDo from "./components/AddToDo";
import uuid from "uuid";
class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Dinner",
        completed: false
      },
      {
        id: uuid.v4(),
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

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addToDo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo addToDo={this.addToDo} />
          <ToDos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
