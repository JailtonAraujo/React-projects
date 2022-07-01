import { useState } from "react";

const ConditionalRedner = () =>{

    const [name,setName] = useState("Mario"); 

    return(
        <div>
            {name === "jailton" ? (
                <dir>
                    <p>O nome É jailton</p>
                </dir>
            ) : (
                <div>
                    <p>O nome não e Jailton</p>
                </div>
            ) }
            <button onClick={() => setName("jailton")} >Set Jailton</button>
        </div>
    )
}

export default ConditionalRedner;