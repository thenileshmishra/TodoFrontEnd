import React, { useState } from "react";

function TodoForm() {
  const [text, setText] = useState("");

  const onFormSubmit = () => {};

  const onInputChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <divn className="form--wrapper">
      <form className="form" onSubmit={onFormSubmit}>
        <input
          placeholder="Enter new ToDo..."
          className="form-input"
          onChange={onInputChange}
        />
      </form>
    </divn>
  );
}

export default TodoForm;
