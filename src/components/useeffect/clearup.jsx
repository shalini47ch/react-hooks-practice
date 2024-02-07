//the object of this is that whenever you are changing the display size the value is getting updated
import {React,useState,useEffect} from "react"

const ClearUp=()=>{
    //here the screen size is changing so use the usestate hook
    const [widthCount,setWidthCount]=useState(window.screen.width)
    //here the size is changing on using the inspect element so it is a sideeffect so use a useEffect hook
    const currentWidth=()=>{
        setWidthCount(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize",currentWidth)

    },[])

    return(
        <div>
            <p>The size of the window is <span>{widthCount}</span></p>
        </div>
    )
}
export default ClearUp

//On resizing the width is changing so this is the perfect example of useEffect hook