import { useState } from "react";
const User = (props) =>{
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    return(
        <div className="container">
            <div className="user-card">
                    <h1>Count = {count}</h1>
                    <h1>Count2 = {count2}</h1>
                    <button onClick={()=>setCount(count+1)}>Increase</button>
                    <h2>Name : {props.name}</h2>
                    <h3>Location : {props.location}</h3>
            </div>
        </div>
    )
}
export default User;