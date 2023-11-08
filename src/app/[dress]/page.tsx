'use client'
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import m1 from '@/images/m1.jpeg'
import wish from '@/images/wishes.svg';
import wishes from '@/images/wishess.svg';
import caret from '@/images/caret.svg';

function page() {
    const dress = useParams()?.dress;
    console.log(dress)
    const [liked, setLiked] = useState(false)
    return (
        <div className='mx-16 gap-8 flex'>
            <Image src={m1} alt='' className='w-1/2' />
            <div className='w-1/2 p-6'>
                <h1 className='text-4xl'>Cassidy Crochet Top</h1>
                <div className='flex gap-6 mt-3 text-xl font-normal'>
                    <p className='text-slate-500'>$27.99</p>
                    <p className='text-slate-700'>In Stock</p>
                </div>
                <div className='my-8 text-lg'>
                    <p className='font-normal'>
                        <span className='text-slate-500'>Color: </span>
                        <span className='text-slate-700'>Sage</span>
                    </p>
                    <div className='flex mt-3 gap-3'>
                        <button className='rounded-full bg-slate-800 text-white py-1 px-6'>Sage</button>
                        <button className='rounded-full bg-white text-slate-500 border-slate-400 border-[1px] py-1 px-6'>White</button>
                    </div>
                    <div className='my-12 text-lg'>
                        <p className='font-normal text-slate-500'>Size</p>
                        <div className='flex mt-3 gap-3'>
                            <button className='rounded-full bg-white text-slate-500 border-slate-400 border-[1px] py-1 px-6'>Small</button>
                            <button className='rounded-full bg-white text-slate-500 border-slate-400 border-[1px] py-1 px-6'>Medium</button>
                            <button className='rounded-full bg-white text-slate-500 border-slate-400 border-[1px] py-1 px-6'>Large</button>
                        </div>
                    </div>
                    <div className='flex my-12 gap-6'>
                        <button className='rounded-full bg-slate-800 text-white py-1 px-12'>Add to Cart</button>
                        <button className='rounded-full bg-white text-slate-500 border-slate-400 border-[1px] py-1 px-12'>Buy It Now</button>
                        <Image
                            src={liked ? wishes : wish}
                            onClick={() => setLiked(!liked)}
                            alt='love'
                            height={50}
                            width={50}
                            className='h-10 w-10 bg-white p-2 rounded-full border-slate-400 border-[1px]'
                        />
                    </div>
                </div>
                <hr className='border-slate-400' />
                <div className='my-6 text-lg font-light text-black flex justify-between pr-2'>
                    <p>Shipping and Returns</p>
                    <Image src={caret} alt="caret" height={10} width={15} />
                </div>
                <hr className='border-slate-400' />
                <div className='my-6 text-lg font-light text-black flex justify-between pr-2'>
                    <p>Dimensions</p>
                    <Image src={caret} alt="caret" height={10} width={15} />
                </div>
                <hr className='border-slate-400' />
                <div className='my-6 text-lg font-light text-black flex justify-between pr-2'>
                    <p>SKU</p>
                    <Image src={caret} alt="caret" height={10} width={15} />
                </div>
                <hr className='border-slate-400' />
                <div className='my-6 text-lg font-light text-black flex justify-between pr-2'>
                    <p>Category</p>
                    <Image src={caret} alt="caret" height={10} width={15} />
                </div>
                <hr className='border-slate-400' />
            </div>
        </div>
    )
}

export default page