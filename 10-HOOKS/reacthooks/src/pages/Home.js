import HookUseEffect from "../components/HookUseEffect"
import HookUseReducer from "../components/HookUseReducer"
import HookUseState from "../components/HookUseState"

//context
import { useContext } from "react"
import { SomerContext } from "../components/HookUseContext"
import HookUseRef from "../components/HookUseRef"
import HookUseCallback from "../components/HookUseCallback"
import HookUseMemo from "../components/HookUseMemo"
import HookUseLayoutEffect from "../components/HookUseLayoutEffect"
import HookUseImperativeHandler from "../components/HookUseImperativeHandler"
import HookCustom from "../components/HookCustom"
import EvoqueMessage from "../components/EvoqueMessage"

const Home = () => {

  const {valueContext} = useContext(SomerContext);

  return (
    <div>

        <HookUseState/>

        <HookUseReducer/>

        <HookUseEffect/>

        <h2>useContext</h2>
        <p>context value: {valueContext}</p>
        <hr />

        <HookUseRef/>

        <HookUseCallback/>

        <HookUseMemo/>

        <HookUseLayoutEffect/>

        <HookUseImperativeHandler/>

        <HookCustom/>

        <EvoqueMessage/>

    </div>
  )
}

export default Home