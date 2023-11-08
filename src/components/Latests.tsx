// "use client"
// import Image from 'next/image';
// import m1 from '@/images/m1.jpeg'
// import m2 from '@/images/m2.jpeg'
// import m3 from '@/images/m3.jpeg'
// import m4 from '@/images/m4.jpeg'
// import m5 from '@/images/m5.jpeg'
// import m6 from '@/images/m6.jpeg'
// import m7 from '@/images/m7.jpeg'
// import m8 from '@/images/m8.jpeg'
// import 'swiper/swiper-bundle.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// // import wish from '@/images/wishes.svg';
// // import wishes from '@/images/wishess.svg';
// import { useState } from 'react';


// // let LATEST: {image: any, title: string}[];
// // let LATEST: (latest)[];
// type latests = {
//     image: any,
//     title: string,
//     price: number,
//     id: any,
//     w: any,
//     w2: any,
//     likedV: boolean
// }
// const LATEST: latests[] = [
//     {
//         image: m1,
//         title: 'Ego Bodycon',
//         price: 18.79,
//         id: 1,
//         w: "/images/wishess.svg",
//         w2: "/images/wish.svg",
//         likedV: false
//     },
//     {
//         image: m2,
//         title: 'Layla jeans',
//         price: 20.99,
//         id: 2,
//         w: "/images/wishess.svg",
//         w2: "/images/wish.svg",
//         likedV: false
//     },
//     {
//         image: m3,
//         title: 'Bailey Plisse Mini Dress',
//         price: 28.56,
//         id: 3,
//         w: "/images/wishess.svg",
//         w2: "/images/wish.svg",
//         likedV: false
//     },
//     {
//         image: m4,
//         title: 'Lexy Mini Dress',
//         price: 37.99,
//         id: 4,
//         w: "/images/wishess.svg",
//         w2: "/images/wish.svg",
//         likedV: false
//     }
// ]
// const TOPSELL: latests[] = [
//     {
//         image: m5,
//         dress: 'Leandra Metallic Midi Dress',
//         price: 18.79
//     },
//     {
//         image: m6,
//         dress: 'Queen Faux Leather Dress',
//         price: 20.99
//     },
//     {
//         image: m7,
//         dress: 'Mila Corset Mini Dress',
//         price: 28.56
//     },
//     {
//         image: m8,
//         dress: 'Sabrina Bandage Maxi Dress',
//         price: 37.99
//     },
//     {
//         image: m5,
//         dress: 'Ego Bodycon',
//         price: 18.79
//     },
//     {
//         image: m6,
//         dress: 'Layla jeans',
//         price: 20.99
//     },
//     {
//         image: m7,
//         dress: 'Bailey Plisse Mini Dress',
//         price: 28.56
//     },
//     {
//         image: m8,
//         dress: 'Lexy Mini Dress',
//         price: 37.99
//     }
// ]




// function Latest() {
//     // const wishValue = liked ? "/images/wishess.svg" : "/images/wishes.svg";

//     // const likeDress = (id: number, likedV: boolean,w: string): void => {

//     //    if (LATEST.find(l=>l.id===id)){
//     //     likedV=!likedV
//     //    }
//     //     console.log("id:",id)
//     //     console.log("likedValue:",likedV)        
//     // }
//     // const [likedItems, setLikedItems] = useState(LATEST.map(() => false));

//     // const toggleLike = (index:number) => {
//     //     const newLikedItems = [...likedItems];
//     //     newLikedItems[index] = !newLikedItems[index];
//     //     setLikedItems(newLikedItems);
//     // };

//     const [images, setImages] = useState(LATEST);
//     const click = (id: number) => {
//         const newImage = images.map((i)=>{ 
//             if(i.id===id){
//                 return{...i, w: "/images/wishess.svg"};
//             }else return i;
//             });
//         setImages(newImage)
//     }
//     return (
//         <section className='m-20 gap-20'>
//             <main>
//                 <h1 className='text-4xl'>Latest Arrivals</h1>
//                 <Swiper modules={[Navigation]} className='flex gap-4 mb-20 mt-8' slidesPerView={4} navigation>
//                     {LATEST.map(({ title, image, price, id, w, w2, likedV }: latests, index: number) => (
//                         <SwiperSlide key={Math.random()} className='w-auto min-w-fit text-xl'>
//                             <Image src={image} alt='imgs' className='relative' height={300} width={300} />
//                             <Image
//                                 // src={likedV ? w : w2}
//                                 // onClick={() => likeDress(id, likedV,w)}
//                                 // src={likedItems[index] ? '/images/wishess.svg' : '/images/wishes.svg'} onClick={() => toggleLike(index)} 
//                                 src={w2}
//                                 onClick={()=>click(id)}
//                                 id={id}
//                                 alt='love'
//                                 height={50}
//                                 width={50}
//                                 className='h-10 w-10 absolute bottom-24 bg-white p-2 rounded-full left-4'
//                             />
//                             <p className='font-light my-2'>{title}</p>
//                             <p className='text-slate-500'>${price}</p>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </main>
//         </section >
//     )
// }

// export default Latest



// const wishValue = (isLiked: boolean): string => isLiked ? "/images/wishess.svg" : "/images/wishes.svg";
// const wishValue = (isLiked: boolean): string => {
//     if (isLiked) {
//         return "/images/wishess.svg"
//     } return "/images/wishes.svg";
// }

// const like = (id: number) => {
//     let result = LATEST.find(l => l.id === id)
//     debugger
//     if (result){
//         result.isLiked = !result.isLiked
//     }
// }
