'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

function page() {
    const dress = useParams()?.dress;
    console.log(dress)
    return (
        <div className='m-8'>
            {/* <Image src={} alt=''/> */}
            <div></div>
        </div>
    )
}

export default page