import React, { useReducer } from "react";

// Action türlerini tanımlama
enum CountActionKind {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
}

// Action arayüzü
interface CountAction {
  type: CountActionKind;
  payload: number;
}

// State arayüzü
interface CountState {
  count: number;
}

// Reducer fonksiyonu
const counterReducer = (state: CountState, action: CountAction): CountState => {
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.INCREASE:
      return { ...state, count: state.count + payload };
    case CountActionKind.DECREASE:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};

// Bileşen
const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button
        onClick={() => dispatch({ type: CountActionKind.INCREASE, payload: 1 })}
      >
        Increase
      </button>
      <button
        onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 1 })}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;