"use client"
import Image from 'next/image';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useState, useEffect, useContext } from 'react';
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { db } from './firebase';
import Link from 'next/link';
import { latests, detail } from './latestsInterface';
import { cartContext } from './ContextProvider';

// let LATEST: {image: any, dress: string}[];
// let LATEST: (latest)[];
// let Latests: (a: latest) => void

function Latest() {
    const breakpoints = {
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        }
    };
    const {addWish, removeWish} = useContext(cartContext);
    const [LATEST, setLATEST] = useState<latests[]>([]);
    const [TOPSELL, setTOPSELL] = useState<latests[]>([]);
    const [likedItems, setLikedItems] = useState(LATEST.map(() => false));

    let cartinfo: detail;

    const toggleLike = (index: number, item: latests) => {

        setLikedItems((prev) => {
            const newLikedItems = [...prev];
            newLikedItems[index] = !newLikedItems[index];
            let cartinfo: detail = {
                ITEM: item,
                color: '',
                size: '',
                quantity: 0
            };
            newLikedItems[index] ? addWish(cartinfo) : removeWish(cartinfo);
            return newLikedItems;
        });
    };



    useEffect(() => {
        const q = query(collection(db, 'latestdress'))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let latestitems: latests[] = [];

            querySnapshot.forEach((docc) => {
                const docRef = doc(db, 'latestdress', docc.id);
                setDoc(docRef, { ...docc.data(), id: docc.id })

                latestitems.push({ ...docc.data(), id: docc.id } as latests)
            });
            setLATEST(latestitems)
            return () => unsubscribe();
        })
    }, [])

    useEffect(() => {
        const q = query(collection(db, 'topsellers'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let topsellitems: latests[] = [];
            querySnapshot.forEach((docc) => {
                const docRef = doc(db, 'topsellers', docc.id);
                setDoc(docRef, { ...docc.data(), id: docc.id })

                topsellitems.push({ ...docc.data() as latests })
            });
            setTOPSELL(topsellitems)
            return () => unsubscribe();
        })
    }, [])

    return (
        <section className='m-20 gap-20'>
            <main>
                <h1 className='text-4xl'>Latest Arrivals</h1>
                <Swiper modules={[Navigation]} className='flex gap-4 mb-20 mt-8' spaceBetween={1} navigation breakpoints={breakpoints}>

                    {LATEST.map((item: latests, index) => (
                        <SwiperSlide key={Math.random()} className='w-auto min-w-fit text-xl'>
                            <Link href={`/${item.id}`}>
                                <Image src={item.image} alt='imgs' className='relative' height={300} width={300} />
                            </Link>
                            <Image
                                src={likedItems[index] ? '/images/wishess.svg' : '/images/wishes.svg'}
                                onClick={() => toggleLike(index, item)}
                                alt='love'
                                height={50}
                                width={50}
                                className='h-10 w-10 absolute bottom-24 bg-white p-2 rounded-full left-4'
                            />
                            <p className='font-light my-2'>{item.dress}</p>
                            <p className='text-slate-500'>${item.price}</p>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </main>
            <main>
                <h1 className='text-4xl'>Top Sellers</h1>
                <Swiper modules={[Navigation]} className='flex gap-4 my-8' spaceBetween={1} navigation breakpoints={breakpoints}>
                    {TOPSELL.map((item: latests, index) => (
                        <SwiperSlide key={Math.random()} className='text-xl'>
                            <Link href={`/${item.id}`}>
                                <Image src={item.image} alt='imgs' className='relative' height={300} width={300} />
                            </Link>
                            <Image
                                src={likedItems[index] ? '/images/wishess.svg' : '/images/wishes.svg'}
                                onClick={() => toggleLike(index, item)}
                                alt='love'
                                height={50}
                                width={50}
                                className='h-10 w-10 absolute bottom-24 bg-white p-2 rounded-full left-4'
                            />
                            <p className='font-light my-2'>{item.dress}</p>
                            <p className='text-slate-500'>${item.price}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </main>
        </section >
    )
}

export default Latest





