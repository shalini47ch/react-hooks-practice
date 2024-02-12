//here we will access the dom elements directly using the useref hooks

import {useRef} from "react";

const RefHooks2=()=>{
    const inputRef=useRef()

    const changeBorder=()=>{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="blue";

    }
    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={changeBorder}>Submit</button>
       
        </div>
    )
}
export default RefHooks2

//useref ka reference de diya gaya hai input field ko 