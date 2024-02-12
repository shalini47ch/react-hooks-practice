//this is the most important hook meant to optimize the performance of our app
//in usememo we  can return the value which is not possible in case of useeffect hook there we had a cleanup function
//this has the same structure as that of the useEffect hook but here we are returning a variable
//const var_name=useMemo(callback,[dependency]) here there are two parameters just like useEffect
//unrelated buttons changes were also shown in the console which resulted in performance issue
import { useState, useMemo } from "react";

const UseMemoHook = () => {
  //create two usestates one for toggling the button and the other is for setting the number
  const [mynum, setNumber] = useState(0);
  const [show, setShow] = useState(false); //this will help in toggling of buttons

  const getValue = () => {
    return setNumber(mynum + 1);
  };
  //create one function to slow our app so that we can improve it using useMemo hook
  const countNumber = (num) => {
    for (let i = 0; i <= 1000000; i++) {}

    return num;
  };
  const checkData = useMemo(() => {
    //jab jab mynum change hoga tab tab countnumber call hoga
    //inappropriate call ko avoid karne ke liye and performance improve karne ke liye use useMemo hook
    return countNumber(mynum);
  }, [mynum]);

  return (
    <div>
      <button onClick={getValue}>Getting the value</button>
      <p>my new number is {checkData}</p>
      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "CLick me"}
      </button>
    </div>
  );
};
export default UseMemoHook;
