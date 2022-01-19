import React from "react";

const Second = () => {
  const [show, setIsShow] = React.useState(false);

  const onClick = () => setIsShow(!show);
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={onClick}>{show ? "hidden" : "show"}</button>
      <>
        {show && (
          <div className="counter-container">
            <h1>counter examples</h1>
            <h3>타입 주석</h3>
            <div>{`const [state, setState]: [
       number,
       React.Dispatch<React.SetStateAction<number>>
     ] = useState(0);`}</div>
            <h3>타입 단언</h3>
            <div>{`const [state, setState] = useState<number>(0);`}</div>
            <h3>타입 추론</h3>
            <div>{` const [state, setState] = useState(0);`}</div>
          </div>
        )}
      </>
    </div>
  );
};

export default Second;
