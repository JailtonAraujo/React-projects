import { useReducer, useState } from "react"


const HookUseReducer = () => {

    //Começando com useReducer
    const [number, dispath] = useReducer((state, action)=>{
        return Math.random(state);
    });

    //2- Avançando no useReducer
    const initialTalks = [
        {id: 1, text:"fazer uma coisa"},
        {id: 2, text:"fazer outra coisa"}
    ]

    const [taskText, setTeskText] = useState("");


    const taskReducer = (state, action) => {
        
        switch (action.type){
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                }

                setTeskText("");

                return [...state, newTask];
            case "DELETE":
                return state.filter((task)=>task.id !== action.id);
            default:
                return state
        }
    }


    const [tasks, dispathTask] = useReducer(taskReducer, initialTalks);
    
    const handlerSubmit = (e) =>{
        e.preventDefault();

        dispathTask({type: "ADD"})

    }

    const removeTask = (id) =>{
        dispathTask({type:"DELETE", id});
    }


  return (
    <div>
        <h2>HookUseReducer</h2>
        <p>Numero: {number}</p>
        <button onClick={dispath} >Altere o numero!</button>
        <h3>Tarefas:</h3>
        <form onSubmit={handlerSubmit}>
            <input type="text" 
            onChange={(e)=> setTeskText(e.target.value)}
            value={taskText}/>
            <input type="submit" value="add tarefa"/>
        </form>
        {tasks.map((task)=>(
            <li key={task.id} onDoubleClick={()=>{removeTask(task.id)}} >{task.text}</li>
        ))}
        <hr />
    </div>
  )
}

export default HookUseReducer