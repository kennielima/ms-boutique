'use client'
import React, { ReactNode, createContext, useEffect, useReducer, useState } from 'react'
import { detail } from './latestsInterface';

type cartContextprops = {
    cart: detail[],
    total: number,
    addCart: (c: detail) => void;
    removeCart: (c: detail) => void;
    wishlist: detail[],
    wishtotal: number,
    addWish: (c: detail) => void;
    removeWish: (c: detail) => void;
}

export const cartContext = createContext({} as cartContextprops);
// const cartContext = React.createContext<cartContext | undefined>(undefined);
// export const ContextProvider = (props: any): React.Context<{}> => {

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<detail[]>([])
    const [total, setTotal] = useState(0)
    const [wishlist, setWishlist] = useState<detail[]>([])
    const [wishtotal, setWishtotal] = useState(0)

    // useEffect(() => {
    // const stored = localStorage.getItem('added')
    // if (stored) {
    //     const storedcart = JSON.parse(stored || '[]')
    //     setCart(storedcart)
    // }
    // }, [])

    const addCart = (c: detail) => {
        let itemexist = false;
        const totalc = cart.reduce((sum, carrt: detail) => sum + carrt.quantity, c.quantity);
        setTotal(totalc)
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
        !itemexist && setCart([...cart, c])
        //     if (!itemexist) {
        //         setCart((prevCart) => {
        //           const updatedCart = [...prevCart, c];
        //           localStorage.setItem('added', JSON.stringify(updatedCart));
        //           return updatedCart;
        //         });
        //       }
    };

    const removeCart = (c: detail) => {
        setCart(cart =>
            cart.filter((carrt) => carrt && carrt.ITEM && carrt.color && carrt.size && c && c.ITEM && c.color && c.size && (c.ITEM.id !== carrt.ITEM.id || c.color !== carrt.color || c.size !== carrt.size)))
    }

    const addWish = (w: detail) => {
        // const totalw = wishlist.reduce((sum, item: detail) => sum + item.quantity, w.quantity);
        // setWishtotal(totalw)

        // for (let wishh of wishlist) {
        //     if (wishh.ITEM.id === w.ITEM.id && wishh.color === w.color && wishh.size === w.size) {
        //         setWishlist((prev) =>
        //             prev.map(item =>
        //                 (item.ITEM.id === wishh.ITEM.id && item.color === wishh.color && item.size === wishh.size)
        //                     ? { ...item, quantity: item.quantity + w.quantity }
        //                     : item
        //             ));
        //         return;
        //     }
        // }
        // setWishlist([...wishlist, w])
    }
        // console.log(wishlist)
    const removeWish = (w: detail) => {
        // setWishlist(wishlist =>
        //     wishlist.filter((wishh) => wishh && wishh.ITEM && wishh.color && wishh.size && w && w.ITEM && w.color && w.size && (w.ITEM.id !== wishh.ITEM.id || w.color !== wishh.color || w.size !== wishh.size)))
    }


    return (
        <cartContext.Provider value={{
            cart, total, addCart, removeCart,
            wishlist, wishtotal, addWish, removeWish
        }}
        >
            {children}
        </cartContext.Provider>
    )
}

export default ContextProvider;