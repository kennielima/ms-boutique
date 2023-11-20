import React from 'react'

function page() {
    return (
        <div className='w-[85%] mx-auto my-20 grid gap-8 text-slate-800'>
            <h1 className='text-3xl sm:text-4xl'>Liked Products</h1>
            <hr className='border-red-300 border-2' />
            <p className='text-sm sm:text-xl'>No products added to the wishlist.</p>
        </div>
    )
}

export default page

// "use client"
// import Image from 'next/image'
// import React, { useContext, useEffect, useState } from 'react'
// import cartimg from '@/images/cart.svg';
// import { cartContext } from '@/components/ContextProvider';
// import bin from '@/images/bin.svg';
// import { detail } from '@/components/latestsInterface';
// import Link from 'next/link';

// function page() {
//     const ctx = useContext(cartContext);
//     console.log(ctx.wishlist);

//     return (
//         <div className='w-[85%] mx-auto my-20 grid gap-8 px-4 text-slate-800'>
//             {ctx.wishlist.length === 0 ? (
//                 <div className='w-[85%] mx-auto my-20 grid gap-8 text-slate-800'>
//                     <h1 className='text-3xl sm:text-4xl'>Liked Products</h1>
//                     <hr className='border-red-300 border-2' />
//                     <p className='text-sm sm:text-xl'>No products added to the wishlist.</p>
//                 </div>
//             ) : (
//                 <div>
//                     <div className='flex justify-between items-center'>
//                         <h1 className='text-2xl sm:text-4xl'>Your Wishlist</h1>
//                         <Link href='/shop'>
//                             <p className='text-sm sm:text-xl text-red-400 hover:text-red-300 transition-all hover:underline'>Continue Shopping?</p>
//                         </Link>
//                     </div>
//                     <hr className='border-red-300 border-2' />
//                     <div className='hidden md:flex justify-between text-xl text-slate-600 mb-8'>
//                         <p>Product</p>
//                         <p className='ml-16'>Dress</p>
//                         <p className='ml-6'>Price</p>
//                         <p>Quantity</p>
//                         <p>Subtotal</p>
//                     </div>
//                     {ctx.wishlist.map((item) =>

//                         <div className='w-auto grid md:flex md:justify-between gap-4 md:gap-0 items-center mb-8'>
//                             <Image src={item.ITEM.image} alt='' height={120} width={120} />
//                             <div className='grid'>
//                                 <h2 className='md:w-48 text-lg'>{item.ITEM.dress}</h2>
//                                 <div className='w-fit text-red-300 text-sm flex justify-between md:gap-12 gap-3 md:mt-3'>
//                                     <p className='border-[0.5px] rounded-xl p-1 border-red-300'>{item.color}</p>
//                                     <p className='border-[0.5px] rounded-xl p-1
//                                     border-red-300'>{item.size}</p>
//                                 </div>
//                             </div>
//                             <div className='flex justify-between'>
//                                 <p className='text-slate-500 text-lg md:-ml-5'>${item.ITEM.price}</p>
//                                 <p className='flex md:hidden text-xl text-right pr-4 md:pr-0'>$35.89</p>
//                             </div>
//                             <div className='flex gap-6'>
//                                 <button className='w-fit rounded-full bg-white text-slate-800 border-slate-400 border-[1px] py-1 px-3 flex gap-4 md:gap-6'>
//                                     <span onClick={() => { item.quantity && item.quantity-- }}>-</span>
//                                     {/* <input type='number' min='1' className='w-fit' value={item.quantity}/> */}
//                                     <span>{item.quantity}</span>
//                                     <span onClick={() => { item.quantity && item.quantity + 1 }}>+</span>
//                                 </button>
//                                 <button className='w-fit rounded-full p-2 border-slate-400 border-[1px]'>
//                                     <Image src={bin} alt='' height={15} width={15} />
//                                 </button>

//                             </div>
//                             <p className='hidden md:flex text-xl text-right pr-4 md:pr-0'>$35.89</p>
//                         </div>
//                     )}
//                     <div>
//                         <hr className='flex border-red-200 border-2 my-8' />
//                         <p className='text-xl text-right pr-4 md:pr-0'>$35.89</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default page