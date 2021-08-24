import { useLayoutEffect, useEffect, useRef } from 'react';

import './styles.css';

export const UseLayoutEffectExample = () => {
  const ourDiv = useRef();

  useEffect(() => {
    console.log('useEffect');
  }, [ourDiv]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    ourDiv.current.style.backgroundColor = 'red';
  }, [ourDiv]);

  return (
    <div id='my-div' ref={ourDiv}>
      useLayoutEffect vs useEffect
    </div>
  );
};
