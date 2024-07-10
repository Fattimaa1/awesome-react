import { useState } from "react";

const NewCounter = () => {
  const [number1, setNumber1] = useState(5);

  return (
    <div>
      <button role="button" onClick={() => setNumber1(number1 * 5)}>
        *5
      </button>
      <h4>{number1}</h4>
      <button role="button" onClick={() => setNumber1(number1 * 10)}>
        *10
      </button>
      <button role="button" onClick={() => setNumber1(5)}>
        Reset
      </button>
    </div>
  );
};
export default NewCounter;
