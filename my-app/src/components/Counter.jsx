import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  // const counterFuncWithAsync = async() => {
  //   const message = await (number == 10)
  //   console.log(message)
  // }

  return (
    <div>
      <h2>Counter</h2>
      <button role="button" onClick={() => setNumber(number + 1)}>
        +
      </button>
      <h4>{number}</h4>
      <button role="button" onClick={() => setNumber(number - 1)}>
        -
      </button>
    </div>
  );
};

export default Counter;
