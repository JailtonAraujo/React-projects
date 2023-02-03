import { useRef } from "react"
import SomeComponent from "./SomeComponent"

const HookUseImperativeHandler = () => {

    const compRef = useRef()

  return (
    <div>
        <h2>UseImperativeHandler</h2>
        <SomeComponent ref ={compRef}/>
        <button onClick={() => compRef.current.validate()} >Validate</button>
        <hr />
    </div>
  )
}

export default HookUseImperativeHandler