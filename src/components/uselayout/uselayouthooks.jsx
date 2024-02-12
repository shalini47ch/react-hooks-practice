//this hook runs synchronously after a render but before the screen is updated this is very much similar to useEffect hook
//useEffect runs asynchronously thus in most of the use cases we use the useEffect hook,and it is generally executed from top down to bottom left

//useLayout will run first and then useEffect will run
import { useLayoutEffect, useState } from "react";

const UseLayoutHook = () => {
  const [num, setNum] = useState(0);
  useLayoutEffect(() => {
    if (num === 0) {
      setNum(num + Math.random() * 100);
    }
  }, [num]);

  return (
    <div>
      <p>My new random number is {num}</p>
      <button onClick={() => setNum(0)}>random number</button>
    </div>
  );
};
export default UseLayoutHook;

//useLayoutEffect hook helps to overcome the flicking effect which we see in useEffect hook
//here every time a random number is getting generated and we are not able to see the number from where it started that is 0
