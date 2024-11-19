import { useState } from "react";


function Counter (){
    const [text,setText] = useState("")
    return(
        <div>
            <input type="text" onChange={(event)=>setText(event.target.value)}  />
            <br />
            <span>{text}</span>
        </div>
    )
}

export default Counter;