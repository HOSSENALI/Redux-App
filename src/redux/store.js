import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";
const store = configureStore({
    reducer: CounterReducer
});
export default store;