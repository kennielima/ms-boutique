"use client"
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react';
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { db } from '@/components/firebase';
// import Link from 'next/link';
import { latests } from '@/components/latestsInterface';
import Link from 'next/link';

function page() {
    const [DRESSES, setDRESSES] = useState<latests[]>([]);
    const [likedItems, setLikedItems] = useState(DRESSES.map(() => false));

    const toggleLike = (index: number) => {
        const newLikedItems = [...likedItems];
        newLikedItems[index] = !newLikedItems[index];
        setLikedItems(newLikedItems);
        console.log(likedItems)
    };


    useEffect(() => {
        const q = query(collection(db, 'dresses'))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let dresses: latests[] = [];

            querySnapshot.forEach((docc) => {
                dresses.push({ ...docc.data(), id: docc.id } as latests)
            });
            setDRESSES(dresses)
            return () => unsubscribe();
        })
    }, [])

    return (
        <div className='w-5/6 mx-auto my-12 font-mono'>
            <div className='grid md:flex gap-4 mb-4 md:justify-between justify-center items-center'>
                <p>Showing 1–8 of 1 results</p>
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
            <div className='grid grid-cols-fluid my-8 ml-[6rem] sm:ml-16 justify-center'>
                {DRESSES.map(({ dress, image, price, id }: latests, index) => (

                    <div className='relative mb-4 w-fit'>
                        <Link href={`${id}`}>
                            <Image src={image} alt='imgs' height={200} width={200} />
                        </Link>
                        <Image
                            src={likedItems[index] ? '/images/wishess.svg' : '/images/wishes.svg'}
                            onClick={() => toggleLike(index)}
                            alt='love'
                            height={50}
                            width={50}
                            className='h-10 w-10 bg-white p-2 absolute bottom-24 rounded-full left-4'
                        />
                        <p className='font-light my-2 pr-5'>{dress}</p>
                        <p className='text-slate-500'>${price}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default page