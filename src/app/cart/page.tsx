"use client"
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import cartimg from '@/images/cart.svg';
import { cartContext } from '@/components/ContextProvider';
import bin from '@/images/bin.svg';
import { detail } from '@/components/latestsInterface';
import Link from 'next/link';

function page() {
    const ctx = useContext(cartContext);
    let cartinfo: detail;

    // console.log(ctx.cart);

    return (
        <div className='w-[85%] mx-auto my-20 grid gap-8 px-4 text-slate-800'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl sm:text-4xl'>Your Cart</h1>
                <Link href='/shop'>
                    <p className='text-sm sm:text-xl text-red-400 hover:text-red-300 transition-all hover:underline'>Continue Shopping?</p>
                </Link>
            </div>
            <hr className='border-red-300 border-2' />

            {ctx.cart.length === 0 ? (
                <div className='flex items-center'>
                    <Image className="" src={cartimg} alt="cart" height={20} width={20} />
                    <p className='text-xl px-4'>Your cart is currently empty.</p>
                </div>
            ) : (
                <div>
                    <div className='hidden md:flex justify-between text-xl text-slate-600 mb-8'>
                        <p>Product</p>
                        <p className='ml-16'>Dress</p>
                        <p className='ml-6'>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>

                    {ctx.cart.map((item) =>
                        <div className='w-auto grid md:flex md:justify-between gap-4 md:gap-0 items-center mb-8'>
                            <Link href={`/${item.ITEM.id}`}>
                                <Image src={item.ITEM.image} alt='' height={120} width={120} />
                            </Link>
                            <div className='grid'>
                                <Link href={`/${item.ITEM.id}`}>
                                    <h2 className='md:w-48 text-lg hover:underline'>{item.ITEM.dress}</h2>
                                </Link>
                                <div className='w-fit text-red-300 text-sm flex justify-between md:gap-12 gap-3 md:mt-3'>
                                    <p className='border-[0.5px] rounded-xl p-1 border-red-300'>{item.color}</p>
                                    <p className='border-[0.5px] rounded-xl p-1
                                    border-red-300'>{item.size}</p>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-slate-500 text-lg md:-ml-5'>${item.ITEM.price}</p>
                                <p className='flex md:hidden text-xl text-right pr-4 md:pr-0'>$35.89</p>
                            </div>
                            <div className='flex gap-6'>
                                <button className='w-fit rounded-full bg-white text-slate-800 border-slate-400 border-[1px] py-1 px-3 flex gap-4 md:gap-6'>
                                    <span onClick={() => { }}>-</span>
                                    {/* <input type='number' min='1' className='w-fit' value={item.quantity}/> */}
                                    <span>{item.quantity}</span>
                                    <span onClick={() => { }}>+</span>
                                </button>
                                <button className='w-fit rounded-full p-2 border-slate-400 border-[1px]'>
                                    <Image src={bin} onClick={()=> ctx.removeCart(cartinfo)} alt='' height={15} width={15} />
                                </button>

                            </div>
                            <p className='hidden md:flex text-xl text-right pr-4 md:pr-0'>$35.89</p>
                        </div>
                    )}
                    <div>
                        <hr className='flex border-red-200 border-2 my-8' />
                        <p className='text-xl text-right pr-4 md:pr-0'>$35.89</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default page