import { createContext } from "react";

export const SomerContext = createContext()

export const HookUseContext = ({children}) => {
    const valueContext = "Testing context"

    return (
        <SomerContext.Provider value={{valueContext}}>
            {children}
        </SomerContext.Provider>
    )
}