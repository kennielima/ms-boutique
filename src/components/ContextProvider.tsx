'use client'
import React, { ReactNode, createContext, useReducer, useState } from 'react'
import { detail } from './latestsInterface';

type cartContextprops = {
    cart: detail[],
    addCart: (c: detail) => void;
    removeCart: (c: detail) => void;
    // wishlist: detail[],
    // addWish: (c: detail) => void;
    // removeWish: (c: detail) => void; 
}

export const cartContext = createContext({} as cartContextprops);

// const cartContext = React.createContext<cartContext | undefined>(undefined);
// export const ContextProvider = (props: any): React.Context<{}> => {

export const ContextProvider = ({ children }: { children: ReactNode }) => {

    const [cart, setCart] = useState<detail[]>([])

    // const [wishlist, setWishlist] = useState<detail[]>([])
    // const addWish = (c: detail) => {
    //     (setWishlist([...wishlist, c]))
    // }
    // const removeWish = (c: detail) => {
    //     (setWishlist([...wishlist, c]))
    // }

    const addCart = (c: detail) => {
        // for (let carrt of cart) {
        //     (carrt.ITEM.id === c.ITEM.id && carrt.color === c.color && carrt.size === carrt.size) ?
        //         console.log("q" + carrt.quantity)
        //     // (setCart([...cart, {carrt.quantity }]))
        //     :
        (setCart([...cart, c]))
        // }
    }
    cart.length > 0 && console.log(cart)

    const removeCart = (c: detail) => {

    }

    return (
        <cartContext.Provider value={{ cart, addCart, removeCart }}>
            {children}
        </cartContext.Provider>
    )
}

export default ContextProvider;