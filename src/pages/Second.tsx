import React from "react";
import Answer from "./answers/Second";

const Second = () => {
  const [state, setState] = React.useState(0);

  // increase function
  const increase = () => setState(state + 1);

  return (
    <div className="counter-container">
      <h1>counter examples</h1>
      <div className="counter-items">
        <button className="counter-reset">reset</button>
        <button>-</button>
        {state}
        <button onClick={increase}>+</button>
      </div>

      <Answer />
    </div>
  );
};

export default Second;
