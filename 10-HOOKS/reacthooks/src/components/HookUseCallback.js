import { useCallback, useState } from "react"


import List from "./List"

const HookUseCallback = () => {

    const [count, setCount] = useState(0)

    const getItemsFromDb = useCallback(()=>{
        
            return ['a','b','c'];
        //Permite deixar uma função em cache para garantir que so seja executado somente uma vez
    },[])

  return (
    <div>
        <h2>UseCallback</h2>
        <List getItems={getItemsFromDb}/>
        <button onClick={()=>setCount(count+1)} >Alterar</button>
        <p>count: {count}</p>
        <hr />
    </div>
  )
}

export default HookUseCallback