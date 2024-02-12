import {useReducer} from "react"
import reducer from "./reducer";


let initialVal=0;
const UseReducerHook=()=>{
    const [count,dispatch]=useReducer(reducer,initialVal)
    return (
        <div>
            <button onClick={()=>dispatch({type:"INC"})}>+</button>
            <h1>{count}</h1>
            <button onClick={()=>dispatch({type:"DEC"})}>-</button>
        </div>
    )
}
export default UseReducerHook