import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";

import { Decrement, Increment, IncrementByPayload } from './redux/Actions';
import { useState } from 'react';
function App() {
  const [input,setInput]=useState("");
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);
  console.log(value);

  const handleChangeIncrement = () => {
    dispatch(Increment());
  }
  const handleChangeDecrement = () => {
    dispatch(Decrement());
  }
  const handleChangePayload = (value) => {
    dispatch(IncrementByPayload(value));
    setInput("");
  }
  const handleInput = (e) => {
    setInput(e.target.value);
  }
  return (
    <div>
      <p>
        <button onClick={handleChangeIncrement}>+</button>
        {value}
        <button onClick={ handleChangeDecrement}>-</button>
        <input type="number" onChange={handleInput} value={input}/>
        <button onClick={ ()=>handleChangePayload(parseInt(input))}>Payload</button>
      </p>
    </div>
  );
}

export default App;
