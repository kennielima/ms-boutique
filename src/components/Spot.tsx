import React from 'react'
import Image from 'next/image';
import m1 from '@/images/mm2.jpeg'
import m2 from '@/images/mm1.jpeg'
import m3 from '@/images/mm6.webp'
import m4 from '@/images/m2.jpeg'
import m5 from '@/images/mm5.jpeg'

export default function Spot() {
    return (
        <section className='mx-20 md:h-[46rem] my-36 grid md:flex gap-8'>
            <div className='w-auto md:w-1/3 transition-all duration-500 relative bg-black'>
                <Image src={m1} alt='img' className='h-[22.5rem] md:h-[46rem] w-full object-cover hover:opacity-100 opacity-50 transition-all duration-500' />
                <div className='px-8 absolute bottom-10'>
                    <h1 className='text-3xl text-white'>Month Spot</h1>
                    <button className="py-2 px-6 my-6 border-none rounded-full text-lg font-light bg-white text-black hover:bg-black hover:text-white transition-all">Shop Now</button>
                </div>
            </div>


            <div className='w-auto md:w-1/3 gap-4 grid h-full'>
                <div className='transition-all duration-500 h-[22.5rem] w-full relative bg-black'>
                    <Image src={m2} alt='img' className='h-[22.5rem] w-full object-cover hover:opacity-100 opacity-50 transition-all duration-500' />
                    <div className='px-8 absolute bottom-10'>
                        <h1 className='text-3xl text-white'>Week Spot</h1>
                        <button className="py-2 px-6 my-6 border-none rounded-full text-lg font-light bg-white text-black hover:bg-black hover:text-white transition-all">Shop Now</button>
                    </div>
                </div>
                <div className='transition-all  h-[22.5rem] duration-500 relative bg-black'>
                    <Image src={m3} alt='img' className='h-[22.5rem] w-full object-cover hover:opacity-100 opacity-50 transition-all duration-500' />
                    <div className='px-8 absolute bottom-10'>
                        <h1 className='text-3xl text-white'>Tops</h1>
                        <button className="py-2 px-6 my-6 border-none rounded-full text-lg font-light bg-white text-black hover:bg-black hover:text-white transition-all">Shop Now</button>
                    </div>
                </div>
            </div>


            <div className='w-auto md:w-1/3 gap-4 grid h-full'>
                <div className='transition-all duration-500 h-[22.5rem] w-full relative bg-black'>
                    <Image src={m4} alt='img' className='h-[22.5rem] w-full object-cover hover:opacity-100 opacity-50 transition-all duration-500' />
                    <div className='px-8 absolute bottom-10'>
                        <h1 className='text-3xl text-white'>Bottoms</h1>
                        <button className="py-2 px-6 my-6 border-none rounded-full text-lg font-light bg-white text-black hover:bg-black hover:text-white transition-all">Shop Now</button>
                    </div>
                </div>
                <div className='transition-all  h-[22.5rem] duration-500 relative bg-black'>
                    <Image src={m5} alt='img' className='h-[22.5rem] w-full object-cover hover:opacity-100 opacity-50 transition-all duration-500' />
                    <div className='px-8 absolute bottom-10'>
                        <h1 className='text-3xl text-white'>Special Offer <br />
                            50-70% OFF</h1>
                        <button className="py-2 px-6 my-6 border-none rounded-full text-lg font-light bg-white text-black hover:bg-black hover:text-white transition-all">View All</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
