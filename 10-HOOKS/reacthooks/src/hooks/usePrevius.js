import { useEffect, useRef, useDebugValue } from "react";

export const usePrevius = (value) =>{
    const ref = useRef();

    useDebugValue("--- CUSTOM HOOK E USEDEBUGVALUE ---")
    useDebugValue("O numero anterior é : "+ ref)

    useEffect(() =>{
        ref.current = value;
    })

    return ref.current;

}