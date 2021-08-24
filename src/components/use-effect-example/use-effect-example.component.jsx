import { useState, useEffect, useCallback, useMemo } from 'react';

export const UseEffectExample = () => {
  const [test1, setTest1] = useState(true);
  const [test2, setTest2] = useState(true);

  const myObj = useMemo(
    () => ({
      a: 'my value of a is ' + test1,
    }),
    [test1]
  );

  useEffect(() => {
    console.log(myObj.a);
  }, [myObj]);

  return (
    <div>
      <h1>test1 value: {String(test1)}</h1>
      <h1>test2 value: {String(test2)}</h1>
      <button onClick={() => setTest1(!test1)}>Flip test value</button>
      <button onClick={() => setTest2(!test2)}>Flip test value</button>
    </div>
  );
};
