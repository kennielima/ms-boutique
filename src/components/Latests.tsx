// 'use client'
// import { useContext, useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import wishes from '@/images/wishes.svg';
// import wishess from '@/images/wishess.svg';
// import caret from '@/images/caret.svg';
// import { doc, getDoc } from "firebase/firestore";
// import { db } from '@/components/firebase';
// import { cartContext } from '@/components/ContextProvider';
// import { detail, latests } from '@/components/latestsInterface';

// function page() {
//     const dress = decodeURIComponent(useParams()?.id as any);
//     const [ship, setShip] = useState(false)
//     const [dimension, setDimension] = useState(false)
//     const [sku, setSku] = useState(false)
//     const [category, setCategory] = useState(false)
//     const [categoryN, setCategoryN] = useState('')
//     const [liked, setLiked] = useState(false)
//     // const [ITEM, setITEM] = useState<latests | undefined>(undefined);
//     // const [ITEM, setITEM] = useState<latests>({id: '', price: 0, dress: '', image: ''});
//     const [ITEM, setITEM] = useState<any>(null);
//     const [size, setSize] = useState<string>('small')
//     const [color, setColor] = useState<string>('blue')
//     const [quantity, setQuantity] = useState<number>(1)
//     const { addCart } = useContext(cartContext);
//     const { addWish, removeWish } = useContext(cartContext);

//     useEffect(() => {
//         const fetchData = async () => {
//             const categoryName = ['latestdress', 'topsellers', 'dresses', 'tops', 'bottoms', 'coords']
//             for (let category of categoryName) {
//                 const docRef = doc(db, category, dress)

//                 //     const docRefs = [
//                 //         doc(db, 'latestdress', dress),
//                 //         doc(db, 'topsellers', dress),
//                 //         doc(db, 'dresses', dress),
//                 //         doc(db, 'tops', dress),
//                 //         doc(db, 'bottoms', dress),
//                 //         doc(db, 'coords', dress),
//                 // ]
//                 // for (const docRef of docRefs){
//                 const docSnap = await getDoc(docRef);
//                 if (docSnap.exists()) {
//                     setITEM(docSnap.data());
//                     setCategoryN(category)
//                 }
//             }
//             // const docRef = doc(db, 'topsellers', dress);
//             //     const docSnap = await getDoc(docRef);
//         }
//         fetchData();
//     }, [dress]);
//     // console.log(ITEM);

//     let cartinfo: detail = {
//         ITEM: ITEM,
//         color: color,
//         size: size,
//         quantity: quantity,
//     };

//     const saveDetails = () => {
//         addCart(cartinfo);
//         // alert('added to cart!');
//     };
//     let cartinfo2: latests = {
//         dress: '',
//         image: '',
//         price: 0,
//         id: ''
//     };;

//     const like = (item: latests) => {
//         setLiked(!liked)
//         cartinfo2 = {
//             dress: item.dress,
//             image: item.image,
//             price: item.price,
//             id: item.id
//         };
//     }
//     liked ? addWish(cartinfo2) : removeWish(cartinfo2);


//     return (
//         <section>
//             {ITEM && (
//                 <div className='mx-auto w-[90%] lg:mx-16 grid gap-8 lg:flex'>
//                     <Image
//                         src={ITEM.image}
//                         alt=''
//                         width={200}
//                         height={200}
//                         className='w-3/4 lg:w-1/2'
//                     />
//                     <div className='w-3/4 lg:w-1/2 p-4'>
//                         <h1 className='text-4xl'>{ITEM.dress}</h1>
//                         <div className='flex gap-6 mt-4 text-xl font-normal'>
//                             <p className='text-red-300'>${ITEM.price}</p>
//                             <p className='text-slate-700'>In Stock</p>
//                         </div>
//                         <div className='mt-16 text-lg'>
//                             <p className='font-normal'>
//                                 <span className='text-slate-500'>Color: </span>
//                                 <span className='text-slate-700'>{color}</span>
//                             </p>
//                             <div className='flex mt-4 gap-3'>
//                                 <button
//                                     className={color === 'blue' ? 'rounded-full bg-slate-800 text-white py-2 px-6'
//                                         :
//                                         'bg-white text-slate-500 border-slate-400 border-[1px] rounded-full py-2 px-6'}
//                                     onClick={() => setColor('blue')}>
//                                     Blue
//                                 </button>
//                                 <button
//                                     className={color === 'white' ?
//                                         'bg-slate-900 text-white rounded-full py-2 px-6'
//                                         :
//                                         'rounded-full bg-white text-slate-500 border-slate-400 border-[1px] py-2 px-6'}
//                                     onClick={() => setColor('white')}>
//                                     White
//                                 </button>
//                             </div>
//                             <div className='my-6 text-lg'>
//                                 <p className='font-normal text-slate-500'>Size: {size}</p>
//                                 <div className='flex mt-4 gap-3'>
//                                     <button
//                                         type="submit"
//                                         className={size === 'small' ?
//                                             'rounded-full bg-slate-800 text-white py-2 px-6'
//                                             :
//                                             'rounded-full bg-white text-slate-500 border-slate-400 border-[1px] py-2 px-6'}
//                                         onClick={() => setSize('small')}>
//                                         Small
//                                     </button>
//                                     <button
//                                         className={size === 'medium' ?
//                                             'rounded-full bg-slate-800 text-white py-2 px-6'
//                                             :
//                                             'rounded-full bg-white text-slate-500 border-slate-400 border-[1px] py-2 px-6'}
//                                         onClick={() => setSize('medium')}>
//                                         Medium
//                                     </button>
//                                     <button
//                                         className={size === 'large' ?
//                                             'rounded-full bg-slate-800 text-white py-2 px-6'
//                                             :
//                                             'rounded-full bg-white text-slate-500 border-slate-400 border-[1px] py-2 px-6'}
//                                         onClick={() => setSize('large')}>
//                                         Large
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className='my-6 text-lg'>
//                                 <p className='font-normal text-slate-500'>Quantity</p>
//                                 <div className='flex mt-4 gap-3'>
//                                     <button className='rounded-full bg-white text-slate-800 border-slate-400 border-[1px] py-1 px-3 flex gap-5 text-2xl'>
//                                         <span onClick={() => setQuantity(quantity - 1)}>-</span>
//                                         <span>{quantity}</span>
//                                         <span onClick={() => setQuantity(quantity + 1)}>+</span>
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className='flex mt-8 mb-10 gap-8 items-center'>
//                                 <button
//                                     className='rounded-full bg-slate-800 text-white p-3 w-48 hover:bg-slate-100 hover:text-slate-500 hover:border-slate-400 hover:border-[1px] transition-all'
//                                     onClick={() => saveDetails()}
//                                 >
//                                     Add to Cart
//                                 </button>
//                                 <button className='rounded-full bg-white text-slate-500 border-slate-400 border-[1px] p-3 w-40 hover:text-white hover:bg-slate-800 transition-all'>
//                                     Buy It Now
//                                 </button>
//                                 <Image
//                                     src={liked ? wishess : wishes}
//                                     onClick={() => like(ITEM)}
//                                     alt='love'
//                                     height={50}
//                                     width={50}
//                                     className='h-10 w-10 bg-white p-2 rounded-full border-slate-400 border-[1px]'
//                                 />
//                             </div>
//                         </div>
//                         <hr className='border-slate-400' />
//                         <div className='my-4 text-lg font-light text-black pr-2'>
//                             <div className='flex justify-between'>
//                                 <p>Category</p>
//                                 <Image
//                                     className={category ? 'rotate-180' : ''}
//                                     src={caret}
//                                     onClick={() => setCategory(!category)}
//                                     alt="caret"
//                                     height={10}
//                                     width={15}
//                                 />
//                             </div>
//                             {category && <div className='mt-3 text-red-300'>{categoryN}</div>}
//                         </div>
//                         <hr className='border-slate-400' />
//                         <div className='my-4 text-lg font-light w-full text-black pr-2'>
//                             <div className='flex justify-between'>
//                                 <p>Shipping and Returns</p>
//                                 <Image src={caret}
//                                     className={ship ? 'rotate-180' : ''}
//                                     onClick={() => setShip(!ship)}
//                                     alt="caret"
//                                     height={10}
//                                     width={15}
//                                 />
//                             </div>
//                             {ship && <div className='mt-3 text-slate-500'>Please, read Shipping and Return Policy.</div>}
//                         </div>
//                         <hr className='border-slate-400' />
//                         <div className='my-4 text-lg font-light text-black pr-2'>
//                             <div className='flex justify-between '>
//                                 <p>Dimensions</p>
//                                 <Image src={caret}
//                                     className={dimension ? 'rotate-180' : ''}
//                                     onClick={() => setDimension(!dimension)}
//                                     alt="caret"
//                                     height={10}
//                                     width={15}
//                                 />
//                             </div>
//                             {dimension && <div className='mt-3 text-slate-500'>5 × 5 × 3 in</div>}
//                         </div>
//                         <hr className='border-slate-400' />
//                         <div className='my-4 text-lg font-light text-black pr-2'>
//                             <div className='flex justify-between'>
//                                 <p>SKU</p>
//                                 <Image
//                                     src={caret}
//                                     className={sku ? 'rotate-180' : ''}
//                                     onClick={() => setSku(!sku)}
//                                     alt="caret"
//                                     height={10}
//                                     width={15}
//                                 />
//                             </div>
//                             {sku && <div className='mt-3 text-slate-500'>IMK{Math.floor(Math.random() * (9999))}T</div>}
//                         </div>
//                         <hr className='border-slate-400' />

//                     </div>
//                 </div>
//             )}
//         </section>
//     )
// }

// export default page





















// "use client"
// import Image from 'next/image'
// import React, { useContext, useState } from 'react'
// import { cartContext } from '@/components/ContextProvider';
// import { latests } from '@/components/latestsInterface';
// import Link from 'next/link';
// import wishes from '@/images/wishes.svg';
// import wishess from '@/images/wishess.svg';

// function page() {
//     const ctx = useContext(cartContext);
//     const [liked, setLiked] = useState(false)

//         let cartinfo2: latests

//     const like = (w: latests) => {
//         setLiked(!liked)
//         cartinfo2 = {
//             dress: w.dress,
//             image: w.dress,
//             price: w.price,
//             id: w.id
//         };
//     liked ? ctx.addWish(cartinfo2) : ctx.removeWish(cartinfo2);
//     }


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
//                     </div>
//                     {ctx.wishlist.map((item) =>

//                         <div className='w-auto grid md:flex md:justify-between gap-4 md:gap-0 items-center mb-8'>
//                             <Image src={item.image} alt='' height={120} width={120} />
//                             <div className='grid'>
//                                 <h2 className='md:w-48 text-lg'>{item.dress}</h2>
//                                 <Image
//                                     src={liked ? wishess : wishes}
//                                     onClick={()=>like(item)}
//                                     alt='love'
//                                     height={50}
//                                     width={50}
//                                     className='h-10 w-10 bg-white p-2 rounded-full border-slate-400 border-[1px]'
//                                 />
//                             </div>
//                             <div className='flex justify-between'>
//                                 <p className='text-slate-500 text-lg md:-ml-5'>${item.price}</p>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     )
// }

// export default page

















// 'use client'
// import React, { ReactNode, createContext, useEffect, useState } from 'react'
// import { detail,latests } from './latestsInterface';

// type cartContextprops = {
//     cart: detail[],
//     total: number,
//     totalprice: number,
//     addCart: (c: detail) => void;
//     removeCart: (c: detail) => void;
//     wishlist: latests[],
//     wishtotal: number,
//     addWish: (c: latests) => void;
//     removeWish: (c: latests) => void;
// }

// export const cartContext = createContext({} as cartContextprops);
// // const cartContext = React.createContext<cartContext | undefined>(undefined);
// // export const ContextProvider = (props: any): React.Context<{}> => {

// export const ContextProvider = ({ children }: { children: ReactNode }) => {
//     const [cart, setCart] = useState<detail[]>([])
//     const [total, setTotal] = useState(0)
//     const [totalprice, setTotalprice] = useState(0)
//     const [wishlist, setWishlist] = useState<latests[]>([])
//     const [wishtotal, setWishtotal] = useState(0)

//     // useEffect(() => {
//     // const stored = localStorage.getItem('added')
//     // if (stored) {
//     //     const storedcart = JSON.parse(stored || '[]')
//     //     setCart(storedcart)
//     // }
//     // }, [])

//     const addCart = (c: detail) => {
//         const totalquantity = cart.reduce((sum, carrt: detail) => sum + carrt.quantity, c.quantity);
//         setTotal(totalquantity)

//         const totalprice = cart.reduce((sum, carrt: detail) => sum + carrt.ITEM.price * carrt.quantity, c.ITEM.price * c.quantity);
//         setTotalprice(totalprice);

//         for (let carrt of cart) {
//             if (carrt.ITEM.id === c.ITEM.id && carrt.color === c.color && carrt.size === c.size) {
//                 setCart((prevCart) =>
//                     prevCart.map(item =>
//                         (item.ITEM.id === carrt.ITEM.id && item.color === carrt.color && item.size === carrt.size)
//                             ? { ...item, quantity: item.quantity + c.quantity }
//                             : item
//                     ));
//                 return;
//             }
//         }
//         setCart([...cart, c])

//         // localStorage.setItem('added', JSON.stringify(updatedCart));
//         // return updatedCart;
//     };

//     const removeCart = (c: detail) => {
//         setCart(cart.filter((carrt) =>
//             carrt.ITEM.id !== c.ITEM.id || carrt.color !== c.color || carrt.size !== c.size
//         ))
//         let newTotal = total - c.quantity;
//         setTotal(newTotal)
//         let newtotalprice = totalprice - (c.quantity * c.ITEM.price)
//         setTotalprice(newtotalprice)
//     }

//     const addWish = (w: latests) => {
//         // setWishlist([w])
//         console.log(w)
//     }
//     const removeWish = (w: latests) => {
//         console.log('remove')
//    }

//     return (
//         <cartContext.Provider value={{
//             cart, total, addCart, removeCart,
//             wishlist, wishtotal, addWish, removeWish,
//             totalprice
//         }}
//         >
//             {children}
//         </cartContext.Provider>
//     )
// }

// export default ContextProvider;