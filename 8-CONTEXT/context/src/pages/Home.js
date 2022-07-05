//import {useContext} from "react";
import ChangeCounter from "../components/ChangeCounter";
//import {CounterContext} from "../context/CounterContext";

//refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

//context mais complexo
import {useTitleColorContext} from "../hooks/useTitleColorContext";

const Home = () => {
//const {counter} = useContext(CounterContext);
const {counter} = useCounterContext();
const  {color, dispatch} = useTitleColorContext();

//alterando context mais com plexo
const setTitleColor = (color) =>{
  dispatch({type :color})
}

  return (
    <div>
      <h1 style={{color:color}}>Home</h1>
      <h2>valor do contator: {counter}</h2>
      <ChangeCounter/>
      <div>
        <button onClick={() => setTitleColor("RED")}>Alterar para vermelhor</button>
        <button onClick={() => setTitleColor("BLUE")}>Alterar para azul</button>
      </div>
    </div>
  )
}

export default Home