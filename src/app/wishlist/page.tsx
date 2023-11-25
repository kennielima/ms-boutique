

"use client"
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { cartContext } from '@/components/ContextProvider';
import bin from '@/images/bin.svg';
import { detail } from '@/components/latestsInterface';
import Link from 'next/link';
import wishes from '@/images/wishes.svg';
import wishess from '@/images/wishess.svg';

function page() {
    const ctx = useContext(cartContext);

    const deleteitem = (c: detail) => {
        let cartinfo = {
            ITEM: c.ITEM,
            color: c.color,
            size: c.size,
            quantity: c.quantity,
        };
        ctx.removeWish(cartinfo);
    }

    return (
        <div className='w-[85%] mx-auto my-20 grid gap-8 px-4 text-slate-800'>
            {ctx.wishlist.length === 0 ? (
                <div className='w-[85%] mx-auto my-20 grid gap-8 text-slate-800'>
                    <h1 className='text-3xl sm:text-4xl'>Liked Products</h1>
                    <hr className='border-red-300 border-2' />
                    <p className='text-sm sm:text-xl'>No products added to the wishlist.</p>
                </div>
            ) : (
                <div>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl sm:text-4xl'>Your Wishlist</h1>
                        <Link href='/shop'>
                            <p className='text-sm sm:text-xl text-red-400 hover:text-red-300 transition-all hover:underline'>Continue Shopping?</p>
                        </Link>
                    </div>
                    <hr className='border-red-300 border-2' />

                    {ctx.wishlist.map((item) =>
                        <div className='w-auto grid gap-2 mb-8'>
                            <Image src={item.ITEM.image} alt='' height={300} width={300} />
                            <div className='flex gap-8'>
                                <h2 className='md:w-48 text-lg'>{item.ITEM.dress}</h2>
                                <Image 
                                className='border-[0.5px] rounded-full border-slate-500 p-1'
                                src={bin} 
                                onClick={() => deleteitem(item)} alt='' height={30} width={30} />
                            </div>
                            <p className='text-slate-500 text-lg'>${item.ITEM.price}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default page