import {useContext} from "react";
import { TitlerColorContext } from "../context/TittlerColorContext";

export const useTitleColorContext = () =>{
    const context = useContext(TitlerColorContext);

    if(!context){
        console.log("contexto não econtrado");
    }

    return context;
}