//context
import { useContext } from "react"
import { SomerContext } from "../components/HookUseContext"


const About = () => {

  const {valueContext} = useContext(SomerContext);

  return (
    <div>
      <h2>Context value: {valueContext}</h2>
    </div>
  )
}

export default About