import {React,useState} from "react"

const UseState=()=>{
    const [count,setCount]=useState(0)
    return(
        <>
        <button onClick={()=>setCount(count+1)}>+</button>
        <p>{count}</p>
        <button onClick={()=> count===0?setCount(0):setCount(count-1)}>-</button>
        </>
    )
}
export default UseState