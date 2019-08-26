import React, { Component } from "react";
import PropTypes from "prop-types";

export class ToDoItem extends Component {
  getStyle = () => {
    return {
      background: "#fcba03",
      padding: "10px",
      borderBottom: "10px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
        </p>
      </div>
    );
  }
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default ToDoItem;
