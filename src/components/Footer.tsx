import React from 'react'
import fbk from '@/images/fbk.png';
import yt from '@/images/yt.png';
import watsapp from '@/images/watsapp.png';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='bg-slate-800 flex px-8 sm:px-20 text-white justify-between'>
            <div className='grid lg:flex gap-10 md:gap-20 sm:py-16'>
                <div className='hidden sm:grid'>
                    <h1 className='grid text-2xl mb-4'>YOU ARE WORTH FEELING SPECIAL!</h1>
                    <div className='flex gap-4'>
                        <Image className="rounded-full bg-grey opacity-60" src={fbk} alt='img' height={30} width={30} />
                        <Image className="rounded-full opacity-60" src={yt} alt='img' height={30} width={30} />
                        <Image className="rounded-full opacity-60" src={watsapp} alt='img' height={30} width={30} />
                    </div>
                </div>
                <div className='hidden sm:grid text-slate-300 font-light'>
                    <ul className=''>
                        <li className='my-1'>Products</li>
                        <li className='my-1'>Locations</li>
                        <li className='my-1'>Privacy</li>
                        <li className='my-1'>Terms and Conditions</li>
                        <li className='my-1'>Press</li>
                    </ul>
                </div>
            </div>

            <div className='bg-slate-400 w-[0.08rem] h-inherit my-6 mx-20 hidden sm:flex' />

            <div className='flex sm:grid lg:flex gap-10 md:gap-20 text-slate-300 py-10 sm:py-16'>
                <div>
                    <h1 className='text-xl'>Get in Touch</h1>
                    <p className='font-light text-sm my-2'>+1(706) 824-8282</p>
                    <p>Email: <span className='font-light'>contact@mystorybtq.com</span></p>
                    <div className='flex sm:hidden py-4 gap-4'>
                        <Image className="rounded-full bg-grey opacity-60" src={fbk} alt='img' height={30} width={30} />
                        <Image className="rounded-full opacity-60" src={yt} alt='img' height={30} width={30} />
                        <Image className="rounded-full opacity-60" src={watsapp} alt='img' height={30} width={30} />
                    </div>
                </div>
                <div>
                    <h1 className='text-xl mb-2'>Store Opening Hours</h1>
                    <p className='font-light text-sm'>Mon - Fri: 10:00AM - 08:00PM <br /> Sat: 10:00AM - 08:00PM  <br /> Sun: 12:00PM - 06:00PM</p>
                </div>
            </div>
        </footer >
    )
}
