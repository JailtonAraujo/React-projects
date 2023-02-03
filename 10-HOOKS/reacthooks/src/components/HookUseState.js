import {useState} from 'react'


const HookUseState = () => {

    /* Diferentemente da variavel o useState estimula a renderização do componente, 
    ou seja sempre que ouver mudança a o componente irar reagir */

    //1 - useState
    let userName = "Marcio"
    const [name, setName] = useState("Jailton");

    const changeName = () =>{

        userName = "Junior";
        setName("Jailton Araujo");

    }

    //2 - useState e input

    const [age, setAge] = useState(18);

    const handlerSubmit = (e)=>{
      e.preventDefault();

      alert(`Você tem ${age} anos!`)

    }

  return (
    <div>

        {/*1 - useState*/}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeName} >Change name!</button>
        {/*2 - use State Inpu */}
        <p>Digite sua idade:</p>
        <form onSubmit={handlerSubmit}>
          <input type="text" 
          value={age} 
          onChange={(e)=> setAge(e.target.value)}/>
          <input type="submit" value="Enviar"/>
        </form>
        <p>{`Você tem ${age} anos`}</p>
        <hr/> 
    </div>
  )
}

export default HookUseState