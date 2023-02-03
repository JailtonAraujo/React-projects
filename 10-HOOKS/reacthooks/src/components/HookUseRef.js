import { useEffect, useRef, useState } from "react"

const HookUseRef = () => {

    // 1 - useRef

    const numberRef = useRef(0);
    const [count, setCount] = useState(0);
    const [countB, setCountB] = useState(0);

    useEffect(()=>{
        numberRef.current = numberRef.current + 1
    })

    // 2 - useRef e DOM
    const inputRef = useRef()
    const [text, setText] = useState("");

    const handlerSubmit = (e) =>{
        e.preventDefault();

        setText("")

        inputRef.current.focus();

    }

  return (
    <div>
        <h2>UseRef</h2>
        {/*1 - useRef*/}
        <p>O componente renderizou {numberRef.current} vezes!</p>
        <p>counte 1 : {count}</p>
        <button onClick={() => setCount(count+1)} >mudar count 1</button>
        <p>counte 2 : {countB}</p>
        <button onClick={() => setCountB(countB+1)} >mudar count 2</button>
        {/*2 - useRef e DOm*/}
        <form onSubmit={handlerSubmit}>
            <input type="text" 
            ref={inputRef}
            value={text}
            onChange={(e)=>setText(e.target.value)}  />
            <input type="submit" value="enviar"/>
        </form>
        <hr />
    </div>
  )

}

export default HookUseRef