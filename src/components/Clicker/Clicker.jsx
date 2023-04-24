import { useState } from "react";

function Clicker() {
  const [name] = useState('Kobi');
  const [state, setState] = useState(0);

  return (
    <>
      <p>Hello! My name is {name}.</p>
      <button onClick={() => setState(state + 1)}>Click me!</button>
      <p>I've clicked the button {state} times.</p>
    </>
  );
}

export default Clicker;
