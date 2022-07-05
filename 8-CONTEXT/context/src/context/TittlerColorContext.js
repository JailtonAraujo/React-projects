import {createContext, useReducer} from "react";

export const TitlerColorContext = createContext();

export const titleColorReducer = (state, action) => {
    switch(action.type){
        case "RED":
            return {...state, color:"red"};
        case "BLUE":
            return {...state, color:"blue"};
        default:
            return state;
    }
}

export const TitlerColorContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(titleColorReducer, {color:"purple"});

    return <TitlerColorContext.Provider value={{...state, dispatch}}>
        {children}
    </TitlerColorContext.Provider>
};