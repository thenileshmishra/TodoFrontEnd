import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

function TodoForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
  };

  const onInputChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div className="form--wrapper">
      <form className="form" onSubmit={onFormSubmit}>
        <input
          placeholder="Enter new ToDo..."
          className="form-input"
          onChange={onInputChange}
        />
      </form>
    </div>
  );
}

export default TodoForm;
