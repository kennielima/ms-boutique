'use client'
import React, { ReactNode, createContext, useEffect, useReducer, useState } from 'react'
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
        let itemexist = false;
        for (let carrt of cart) {
            if (carrt.ITEM.id === c.ITEM.id && carrt.color === c.color && carrt.size === c.size) {
                setCart((prevCart) =>
                    prevCart.map(item =>
                        (item.ITEM.id === carrt.ITEM.id && item.color === carrt.color && item.size === carrt.size)
                            ? { ...item, quantity: item.quantity + c.quantity }
                            : item
                    ));
                itemexist = true;
                return;
            }
        }
        !itemexist && setCart([...cart, c]);
    };

    const removeCart = (c: detail) => {
        setCart(cart =>
            cart.filter((carrt) => carrt && carrt.ITEM && carrt.color && carrt.size && c && c.ITEM && c.color && c.size && (c.ITEM.id !== carrt.ITEM.id || c.color !== carrt.color || c.size !== carrt.size) ))
    }

    return (
        <cartContext.Provider value={{ cart, addCart, removeCart }}>
            {children}
        </cartContext.Provider>
    )
}

export default ContextProvider;