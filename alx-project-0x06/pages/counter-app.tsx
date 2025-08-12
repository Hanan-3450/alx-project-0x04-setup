import React from "react";
import { useSelector } from "react-redux";
import { increment, decrement } from "../store/store";
import { RootState, AppDispatch, useAppDispatch } from "../store/store";

export default function CounterApp() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Counter: {count}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="bg-green-500 px-4 py-2 text-white rounded mr-2"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-500 px-4 py-2 text-white rounded"
      >
        Decrement
      </button>
    </div>
  );
}
