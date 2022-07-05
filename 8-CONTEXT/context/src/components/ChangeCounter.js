import { CounterContext } from "../context/CounterContext"
import {useContext} from "react"

const ChangeCounter = () => {

    const {counter,setCounter} = useContext (CounterContext);

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>
            Alterar Counter
        </button>
    </div>
  )
}

export default ChangeCounter