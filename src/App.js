import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";

import { Decrement, Increment, IncrementByPayload } from './redux/Actions';
function App() {
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
  }
  return (
    <div>
      <p>
        <button onClick={handleChangeIncrement}>+</button>
        {value}
        <button onClick={ handleChangeDecrement}>-</button>
        <button onClick={ ()=>handleChangePayload(5)}>Payload</button>
      </p>
    </div>
  );
}

export default App;
