'use client'
import { createContext, useContext, useEffect, useState } from "react"

export const AppContext = createContext<any>(undefined);

export function AppCarrinho({ children }: {
    children: React.ReactNode;
}) {

    const [quantyCurrent, setQuantyCurrent] = useState('')
    return (
        <AppContext.Provider value={{ setQuantyCurrent, quantyCurrent }} >
            {children}
        </AppContext.Provider>
    )
}

export default function useAppCarrinho() {
    return useContext(AppContext)
}