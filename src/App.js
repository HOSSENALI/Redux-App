import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";

import { Decrement, Increment } from './redux/Actions';
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
  return (
    <div>
      <p>
        <button onClick={handleChangeIncrement}>+</button>
        {value}
        <button onClick={ handleChangeDecrement}>-</button>
      </p>
    </div>
  );
}

export default App;
