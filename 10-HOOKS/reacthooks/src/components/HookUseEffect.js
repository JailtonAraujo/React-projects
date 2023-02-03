import {useEffect, useState} from 'react'

const HookUseEffect = () => {

    
    //1- useEffect sem depenencias
    const [number, setNumber] = useState(1);

    useEffect(()=>{
        console.log("Executando useEffect sem array de dependencias!")
    })// Será executado sempre que componete for renderizado

    const changeNumber = () =>{
        setNumber(number + 1);
    }
    //1- useEffect sem depenencias

    //2 - useEffect com array de dependencias vazio
    useEffect(()=>{
        console.log("Executando useEffect com array de dependencias vazio")
    },[]) // Sera executado somente uma vez quando o componente e carregado
    //2 - useEffect com array de dependencias vazio


    //3 - useEffect com item no array de dependencias
    const [anotherNumber, setAnotherNumber] = useState(0);

    const changeAnotherNumber = () =>{
        setAnotherNumber(anotherNumber + 1);
    }

    useEffect(()=>{
        if(anotherNumber > 0){
            console.log("Executando useEffect com item no array de dependencia")
        }
    },[anotherNumber])// executado sempre que haver mudança no anotherNumber
    //3 - useEffect com item no array de dependencias

    //4 - cleanUp no useEffect
    // useEffect(()=>{

    //    const timer = setTimeout(()=>{
    //         alert("Exutando chamada para timeOut")
    //         setAnotherNumber(anotherNumber +1)
    //     },2000)

    //     return () => clearTimeout(timer);

    // },[anotherNumber])

  return (
    <div>
        <h2>useEffect</h2>
        <p>numero:{number} </p>
        <button onClick={changeNumber} >Change Number</button>
        <p>outro numero: {anotherNumber}</p>
        <button onClick={changeAnotherNumber}>change anotherNumber</button>
        <hr />
    </div>
  )
}

export default HookUseEffect