import { forwardRef, useRef, useImperativeHandle } from "react"

const SomeComponent = forwardRef((props, ref)=>{

    {

        const localCompRef = useRef();

        useImperativeHandle(ref, () =>{
            return{
                validate: () =>{
                    if(localCompRef.current.value.length > 3){
                        localCompRef.current.value = ""
                    }
                }
            }
        })
    
      return (
        <div>
            <p>Insira no maximo 3 caracteres</p>
            <input type="text" ref={localCompRef}/>
        </div>
      )
    }

})

export default SomeComponent