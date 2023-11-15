'use client'
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import wish from '@/images/wishes.svg';
import wishes from '@/images/wishess.svg';
import caret from '@/images/caret.svg';
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/components/firebase';
import { cartContext } from '@/components/ContextProvider';
import { detail, latests } from '@/components/latestsInterface';

function page() {
    const dress = decodeURIComponent(useParams()?.id as any);
    const [ship, setShip] = useState(false)
    const [dimension, setDimension] = useState(false)
    const [sku, setSku] = useState(false)
    const [category, setCategory] = useState(false)
    const [liked, setLiked] = useState(false)

    // const [ITEM, setITEM] = useState<latests | undefined>(undefined);
    // const [ITEM, setITEM] = useState<latests>({ dress: '', id: '', image: '', price: 0 });
    const [ITEM, setITEM] = useState<any>(null);
    const [size, setSize] = useState<string>('small')
    const [color, setColor] = useState<string>('blue')
    const [quantity, setQuantity] = useState<number>(1)
    const { addCart, removeCart } = useContext(cartContext);

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, 'latestdress', dress);
            const docRef2 = doc(db, 'topsellers', dress);

            const docSnap = await getDoc(docRef);
            const docSnap2 = await getDoc(docRef2);

            docSnap.exists() ? setITEM(docSnap.data())
                :
                (docSnap2.exists() && setITEM(docSnap2.data())
                )
        }
        fetchData();
    }, [dress]);
    // console.log(ITEM);

    let cartinfo: detail = {
        ITEM: ITEM,
        color: color,
        size: size,
        quantity: quantity,
    };
    // console.log(cartinfo);

    const saveDetails = () => {
        let cart = cartinfo;
        addCart(cart);
        // console.log('cart');
    };

    return (
        <section>
            {ITEM && (
                <div className='mx-20 lg:mx-16 grid gap-8 lg:flex'>
                    <Image
                        src={ITEM.image}
                        alt=''
                        width={200}
                        height={200}
                        className='w-1/2'
                    />
                    <div className='w-1/2 p-4'>
                        <h1 className='text-4xl'>{ITEM.dress}</h1>
                        <div className='flex gap-6 mt-4 text-xl font-normal'>
                            <p className='text-slate-500'>${ITEM.price}</p>
                            <p className='text-slate-700'>In Stock</p>
                        </div>
                        <div className='my-8 text-xl'>
                            <p className='font-normal'>
                                <span className='text-slate-500'>Color: </span>
                                <span className='text-slate-700'>Blue</span>
                            </p>
                            <div className='flex mt-4 gap-3'>
                                <button
                                    className={color === 'blue' ? 'rounded-full bg-slate-800 text-white py-3 px-8'
                                        :
                                        'bg-white text-slate-500 border-slate-400 border-[1px] rounded-full py-3 px-8'}
                                    onClick={() => setColor('blue')}>
                                    Blue
                                </button>
                                <button
                                    className={color === 'white' ?
                                        'bg-slate-900 text-white rounded-full py-3 px-8'
                                        :
                                        'rounded-full bg-white text-slate-500 border-slate-400 border-[1px] py-3 px-8'}
                                    onClick={() => setColor('white')}>
                                    White
                                </button>
                            </div>
                            <div className='my-8 text-lg'>
                                <p className='font-normal text-slate-500'>Size</p>
                                <div className='flex mt-4 gap-3'>
                                    <button
                                        type="submit"
                                        className={size === 'small' ?
                                            'rounded-full bg-slate-800 text-white py-3 px-8'
                                            :
                                            'rounded-full bg-white text-slate-500 border-slate-400 border-[1px] py-3 px-8'}
                                        onClick={() => setSize('small')}>
                                        Small
                                    </button>
                                    <button
                                        className={size === 'medium' ?
                                            'rounded-full bg-slate-800 text-white py-3 px-8'
                                            :
                                            'rounded-full bg-white text-slate-500 border-slate-400 border-[1px] py-3 px-8'}
                                        onClick={() => setSize('medium')}>
                                        Medium
                                    </button>
                                    <button
                                        className={size === 'large' ?
                                            'rounded-full bg-slate-800 text-white py-3 px-8'
                                            :
                                            'rounded-full bg-white text-slate-500 border-slate-400 border-[1px] py-3 px-8'}
                                        onClick={() => setSize('large')}>
                                        Large
                                    </button>
                                </div>
                            </div>
                            <div className='my-8 text-lg'>
                                <p className='font-normal text-slate-500'>Quantity</p>
                                <div className='flex mt-4 gap-3'>
                                    <button className='rounded-full bg-white text-slate-800 border-slate-400 border-[1px] py-2 px-4 flex gap-6 text-2xl'>
                                        <span onClick={() => setQuantity(quantity - 1)}>-</span>
                                        <span>{quantity}</span>
                                        <span onClick={() => setQuantity(quantity + 1)}>+</span>
                                    </button>
                                </div>
                            </div>
                            <div className='flex my-8 gap-8 items-center'>
                                <button
                                    className='rounded-full bg-slate-800 text-white p-3 w-40 hover:bg-slate-100 hover:text-slate-500 hover:border-slate-400 hover:border-[1px] transition-all'
                                    onClick={() => saveDetails()}
                                >
                                    Add to Cart
                                </button>
                                <button className='rounded-full bg-white text-slate-500 border-slate-400 border-[1px] p-3 w-40 hover:text-white hover:bg-slate-800 transition-all'>
                                    Buy It Now
                                </button>
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
                        <div className='my-6 text-lg font-light text-black pr-2'>
                            <div className='flex justify-between '>
                                <p>Shipping and Returns</p>
                                <Image src={caret}
                                    className={ship ? 'rotate-180' : ''}
                                    onClick={() => setShip(!ship)}
                                    alt="caret"
                                    height={10}
                                    width={15}
                                />
                            </div>
                            {ship && <div className='mt-4 text-slate-500'>Please, read Shipping and Return Policy.</div>}
                        </div>
                        <hr className='border-slate-400' />
                        <div className='my-6 text-lg font-light text-black pr-2'>
                            <div className='flex justify-between '>
                                <p>Dimensions</p>
                                <Image src={caret}
                                    className={dimension ? 'rotate-180' : ''}
                                    onClick={() => setDimension(!dimension)}
                                    alt="caret"
                                    height={10}
                                    width={15}
                                />
                            </div>
                            {dimension && <div className='mt-4 text-slate-500'>5 × 5 × 3 in</div>}
                        </div>
                        <hr className='border-slate-400' />
                        <div className='my-6 text-lg font-light text-black pr-2'>
                            <div className='flex justify-between'>
                                <p>SKU</p>
                                <Image
                                    src={caret}
                                    className={sku ? 'rotate-180' : ''}
                                    onClick={() => setSku(!sku)}
                                    alt="caret"
                                    height={10}
                                    width={15}
                                />
                            </div>
                            {sku && <div className='mt-4 text-slate-500'>IMK8945T</div>}
                        </div>
                        <hr className='border-slate-400' />
                        <div className='my-6 text-lg font-light text-black pr-2'>
                            <div className='flex justify-between '>
                                <p>Category</p>
                                <Image
                                    className={category ? 'rotate-180' : ''}
                                    src={caret}
                                    onClick={() => setCategory(!category)}
                                    alt="caret"
                                    height={10}
                                    width={15}
                                />
                            </div>
                            {category && <div className='mt-4 text-red-400'>Tops</div>}
                        </div>
                        <hr className='border-slate-400' />
                    </div>
                </div>
            )}
        </section>
    )
}

export default page