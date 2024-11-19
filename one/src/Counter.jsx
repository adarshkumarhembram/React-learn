import { useState } from "react";

function Counter (){
    const [x,setX] = useState(0);
    const [y,setY] = useState(0)
   return(
    <div>
        <h1>x: {x}</h1>
        <h1>y: {y}</h1>
        <button onClick={()=>setX(x+1)}>change the value of x</button><br />
        <br />
        <button onClick={()=>setY(x+1)}>change the value of y</button>


    </div>
   )
}

export default Counter;