
import { useState } from "react"
import { useMessage } from "../hooks/useMessage"
import Message from "./Message/Message";

const EvoqueMessage = () => {

    const [msg, setMsg] = useState("");

    const [inputMsg, setInputMsg] = useState("");

    const removeMessage = () =>{
        setMsg("")
    }

    const addMessage = () =>{
        setMsg(inputMsg)
    }

  return (
    <div>
        <h2>Message controller</h2>
        <Message msg={msg}/>
        <input type="text" onChange={(e)=> setInputMsg(e.target.value)} />
        <button onClick={addMessage} >Add message</button>
        <button onClick={removeMessage} >Remove message</button>
        <hr />
    </div>
  )
}

export default EvoqueMessage