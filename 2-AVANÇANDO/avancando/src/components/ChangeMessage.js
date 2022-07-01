const ChengeMessage = ({handlerMessage}) =>{

    const msgs = ["oi", "olá", "oi, tudo bem?"]

    return(
        <div>
            <button onClick={() => handlerMessage(msgs[0])} >1</button>
            <button onClick={() => handlerMessage(msgs[1])} >2</button>
            <button onClick={() => handlerMessage(msgs[2])} >3</button>
        </div>
    )
}
export default ChengeMessage;