import { useState } from 'react';

export const UseStateExample2 = () => {
  const [count, setCount] = useState(0);

  const handleAlert = () => {
    setTimeout(() => {
      alert(`Alert count is: ${count}`);
    }, 3000);
  };

  return (
    <div>
      <h1>Count value: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment count
      </button>

      <button onClick={handleAlert}>Alert current Count</button>
    </div>
  );
};
