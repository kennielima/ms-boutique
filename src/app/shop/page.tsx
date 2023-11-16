import Image from 'next/image'
import React from 'react'
import m1 from '@/images/m1.jpeg'
function page() {
    return (
        <div className='mx-28 my-16 font-mono'>
            <div className='flex justify-between'>
                <p>Showing 1–12 of 4 results</p>
                <div>
                    <select className='border-[1.5px] border-slate-200 p-3 rounded-full'>
                        <option value='default'>Default sorting</option>
                        <option value='pop'>Sort by popularity</option>
                        <option value='av'>Sort by Average rating</option>
                        <option value='latest'>Sort by Latest</option>
                        <option value='h2l'>Sort by price: high to low</option>
                        <option value='l2h'>Sort by price: low to high</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-fluid my-8'>
            <div>
                <Image src={m1} alt='imgs' className='relative' height={200} width={200} />
                <Image
                    src='/images/wishess.svg'
                    alt='love'
                    height={50}
                    width={50}
                    className='h-10 w-10 bg-white p-2 rounded-full left-4'
                />
                <p className='font-light my-2'>dress</p>
                <p className='text-slate-500'>price</p>
            </div>
            <div>
                <Image src={m1} alt='imgs' className='relative' height={200} width={200} />
                <Image
                    src='/images/wishess.svg'
                    alt='love'
                    height={50}
                    width={50}
                    className='h-10 w-10 bg-white p-2 rounded-full left-4'
                />
                <p className='font-light my-2'>dress</p>
                <p className='text-slate-500'>price</p>
            </div>
            <div>
                <Image src={m1} alt='imgs' className='relative' height={200} width={200} />
                <Image
                    src='/images/wishess.svg'
                    alt='love'
                    height={50}
                    width={50}
                    className='h-10 w-10 bg-white p-2 rounded-full left-4'
                />
                <p className='font-light my-2'>dress</p>
                <p className='text-slate-500'>price</p>
            </div>
            <div>
                <Image src={m1} alt='imgs' className='relative' height={200} width={200} />
                <Image
                    src='/images/wishess.svg'
                    alt='love'
                    height={50}
                    width={50}
                    className='h-10 w-10 bg-white p-2 rounded-full left-4'
                />
                <p className='font-light my-2'>dress</p>
                <p className='text-slate-500'>price</p>
            </div>
</div>
        </div>
    )
}

export default page