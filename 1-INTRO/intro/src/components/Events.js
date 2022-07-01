const Events = () =>{

    const clicar = () =>{
        alert("clicou");
    }

    const render = (x) =>{
        if (x){
            return <h2>Renderizou verdadeiro!</h2>
        }else{
            return <h2>Renderizou falso</h2>
        }
    }

    return(
        <div>
            <div>
                <button onClick={clicar} >click aqui</button>
            </div>
            <div>
                {render(true)}
                {render(false)}
            </div>
        </div>
    )
}

export default Events;