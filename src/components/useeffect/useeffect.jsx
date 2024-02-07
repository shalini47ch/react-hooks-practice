import { React, useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const countUpdate = (val) => {
    if (val === "inc") return setCount(count + 1);
    if (val === "dec") return setCount(count - 1);
  };
  //ab jaise jaise count change hora hai waise hi try karo ki title bhi change ho to ye sideeffect useEffect hook se hojaega
  useEffect(() => {
    document.title = count;
    //rerender at those times when the value of count is changing and this is the safest option
  }, [count]);
  return (
    <div>
      <button onClick={() => countUpdate("inc")}>{count}</button>
    </div>
  );
};
export default UseEffect;

//if you put the dependency as the second parameter in your useEffect hook so in that case the re rendering will happen only once
//useEffect(()=>{
    //if you dont pass the dependency then it will rerender every time
// })

//useEffect(()=>{
    //here it will rerender only once
// },[])



//useEffect(()=>{
    //here it will rerender only when there is an change in props or state

// },[props,state])