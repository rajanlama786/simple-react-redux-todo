import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../actions";

const List = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>
            {todo.message}{" "}
            <button onClick={() => props.dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.data,
});

export default connect(mapStateToProps)(List);
