import { usePrevius } from "../hooks/usePrevius"
import { useState } from "react"

const HookCustom = () => {

    const [number, setNumber] = useState(0);
    const previusNumber = usePrevius(number);

  return (
    <div>
        <h2>Hook custom</h2>
        <p>Atual: {number}</p>
        <p>Anterior: {previusNumber}</p>
        <button onClick={() => setNumber(Math.random())} >Alterar!</button>
        <hr />
    </div>
  )
}

export default HookCustom