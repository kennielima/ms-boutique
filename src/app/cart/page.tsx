"use client"
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import cartimg from '@/images/cart.svg';
import { cartContext } from '@/components/ContextProvider';
import bin from '@/images/bin.svg';
import { detail } from '@/components/latestsInterface';

function page() {
    const ctx = useContext(cartContext);
    console.log(ctx.cart);
    const [quantity, setQuantity] = useState<number>(1)

//     { ctx.cart.map(item) => 
//     )
// }
    return (
        <div className='w-[85%] mx-auto my-20 grid gap-8 px-4 text-slate-800'>
            <div className='flex justify-between'>
                <h1 className='text-4xl'>Your Cart</h1>
                <p className='text-xl'>Continue Shopping</p>
            </div>
            <hr className='border-red-300 border-2' />

            {ctx.cart.length === 0 ? (
                <div className='flex items-center'>
                    <Image className="" src={cartimg} alt="cart" height={20} width={20} />
                    <p className='text-xl px-4'>Your cart is currently empty.</p>
                </div>
            ) : (
                <div>
                    <div className='hidden lg:flex justify-between text-xl text-slate-600 mb-8'>
                        <p>Product</p>
                        <p className='ml-[16rem]'>Quantity</p>
                        <p>Subtotal</p>
                    </div>

                    <div className='grid gap-6 lg:gap-0 lg:flex justify-between items-center'>

                        <div className='text-lg'>
                            <Image src={cartimg} alt='' height={200} width={200} className='mb-8' />
                            <h2>Layla Knit Shrug - Small, Taupe</h2>
                            <p className='text-slate-500'>$35.89</p>
                        </div>

                        <div className='flex gap-6 items-center'>
                            <button className='rounded-full bg-white text-slate-800 border-slate-400 border-[1px] py-2 px-4 flex gap-6'>
                                <span onClick={() => setQuantity(quantity - 1)}>-</span>
                                <span>{quantity}</span>
                                <span onClick={() => setQuantity(quantity + 1)}>+</span>
                            </button>
                            <button className='rounded-full p-2 border-slate-400 border-[1px]'>
                                <Image src={bin} alt='' height={15} width={15} />
                            </button>
                        </div>

                        <p className='text-xl'>$35.89</p>

                    </div>
                </div>
            )}
        </div>
    )
}

export default page