'use client'
import React, { ReactNode, createContext, useReducer, useState } from 'react'
import { detail } from './latestsInterface';

type cartContextprops = {
    cart: detail[]
    addCart: (c:detail) => void;
    removeCart: (c:detail) => void;
}

export const cartContext = createContext({} as cartContextprops);

// const cartContext = React.createContext<cartContext | undefined>(undefined);
// export const ContextProvider = (props: any): React.Context<{}> => {

export const ContextProvider = ({children} : {children: ReactNode}) => {

    const [ cart, setCart ] = useState<detail[]>([])

    const addCart = (c:detail) => {
       setCart([...cart, c]);
    }
       console.log(cart)

    const removeCart = (c:detail) => {
        
    }

    return (
        <cartContext.Provider value={{ cart, addCart, removeCart }}>
            {children}
        </cartContext.Provider>
    )
}

export default ContextProvider;