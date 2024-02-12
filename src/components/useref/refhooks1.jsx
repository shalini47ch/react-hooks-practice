import { useState, useRef, useEffect } from "react";

//useref is mainly used when we need to avoid the rerendering of the components if we pass the usestate inside the useeffect then we will run in an infinite loop as it will constinuously rerender
//in other words it creates a mutable variable which prevents the rerendering of components

//the other case where we can use useRef iss when we want to access the dom elements directly
const RefHooks1 = () => {
  const [userInput, setUserInput] = useState("");
  const count = useRef(0);
  //useref will return an object and it has an element called as current so you cant call it directly
  // console.log(count)

  //ab useEffect mei isko pass karenge toh count.current ka value change hoga tab useEffect call hoga
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <p>The element is being called{count.current} times</p>
    </div>
  );
};
export default RefHooks1;
