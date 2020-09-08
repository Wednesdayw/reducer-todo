import React, { useReducer, useState } from "react";
import { ListReducer, initialState } from "./../reducers/ListReducer";
import Todo from "./Todo";

const TodoForm = props => {
  console.log("Meow", props);

const [state, dispatch] = useReducer(ListReducer, initialState);
const [todo, setTodo] = useState("");

const handleChange = event => {
  setTodo(event.target.value);
};

const handleSubmit = e => {
  e.preventDefault();
  dispatch({ type: "ADD-TODO", payload: todo });
};

const handleClear = e => {
  e.preventDefault();
  dispatch({ type: "REMOVE", payload: todo });
};

console.log("this is state", state);

return (
  <div className='form'>
    <form>
      <label htmlFor='todo'>Add Todo: </label>
      <input
        id='todo'
        name='todo'
        type='text'
        value={todo}
        onChange={handleChange}></input>
      <button onClick={handleSubmit}>Add</button>
      <button onClick={handleClear}>Delete</button>
    </form>
    <Todo id={state.id} todo={todo} dispatch={dispatch} state={state} />
  </div>
);
};

export default TodoForm;