import React from "react";
import {useContext} from "react"
import {AppContext} from "../components/usecontext/usercontext"


const Child = () => {

const user=useContext(AppContext)

  return (
    <div>
        <p>User has a name of {user.name} and the age is {user.age}</p>
    
    </div>
  );
};
export default Child;

//here this is acting as a consumer which is consuming from the appcontext provider
