import { useEffect, useState } from "react"

export const useMessage = () =>{

const [message, setMessage] = useState("");

const addMessage = (msg) =>{

    console.log(msg)

    setMessage(msg);

    setTimeout(()=>{
        setMessage("")
    },2000)
}

 const removeMessage = () =>{
    setMessage("")
}

return {message, addMessage, removeMessage}

}