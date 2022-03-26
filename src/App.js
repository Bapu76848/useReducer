import { useReducer } from "react";
import "./styles.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1, text: state.text };
    case "Toggle":
      return { count: state.count, text: !state.text };
    default:
      return state;
  }
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: true
  });

  return (
    <div className="App">
      <h3>{state.count}</h3>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
          dispatch({ type: "Toggle" });
        }}
      >
        {" "}
        Change 2 things
      </button>
      {state.text && <p> This is a text</p>}
    </div>
  );
}
