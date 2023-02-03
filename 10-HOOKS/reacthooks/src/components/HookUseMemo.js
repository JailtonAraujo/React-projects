import { useState, useEffect, useMemo } from "react"

const HookUseMemo = () => {

    // pode ser utilizado para crirar referencia a um valor,
    // dessa forma oque passa ser consultado será a referencia
    // Assim não tendo mais a necessidade do valor ser recarregado sempre 
    // que o coponente for renderizado

    const [number, setNumber] = useState(0);

    const premiunsNumbers = useMemo(()=>{
        return ["0", "100", "300"]
    },[]);

    useEffect(()=>{

        console.log("premins numbers foram alterados...")
    },[premiunsNumbers])


  return (
    <div>
        <h2>UseMemo</h2>
        <input type="text" onChange={(e)=> setNumber(e.target.value)}/>
        {premiunsNumbers.includes(number) ? <p>Acertoy o numero!</p> : ""}
        <hr />
    </div>
  )
}

export default HookUseMemo