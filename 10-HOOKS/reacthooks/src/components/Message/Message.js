import styles from './Message.module.css'
import {useState, useEffect} from 'react'

function Message({msg}) {

  const [message, setMessage] = useState("");

  useEffect(()=>{

    setMessage(msg)

    setTimeout(()=>{
      setMessage("")
    },3000)

  },[msg])

  return (
    <>
      {message && (
        <div className={styles.message_container}>
            <div className={styles.message}>
                {message}
            </div>
            <button onClick={()=>setMessage("")} >Close</button>
        </div>
      )}
    </>
  )
}

export default Message