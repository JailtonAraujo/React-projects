import { useEffect, useLayoutEffect, useState } from "react"

const HookUseLayoutEffect = () => {

    const [name, setName] = useState("")

    useEffect(()=>{

        console.log("2");
        setName("Mudou de novo")

    },[])

    // O useLayoutEffect e executado antes de qualquer coisa no componente
    useLayoutEffect(()=>{
        console.log("1")
        setName("Outro nome")
    },[])

    console.log(name)

  return (
    <div>
        <h2>UseLayoutEffect</h2>
        <p>{name}</p>
        <hr />
    </div>
  )
}

export default HookUseLayoutEffect