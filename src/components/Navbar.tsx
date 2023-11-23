"use client"
import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from '@/images/logo.svg';
import caret from '@/images/caret.svg';
import wish from '@/images/wish.svg';
import cart from '@/images/cart.svg';
import nav from '@/images/nav.svg';
import close from '@/images/close.svg';
import search from '@/images/search.svg';
import Link from "next/link";
import { cartContext } from '@/components/ContextProvider';
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [openShop, setOpenShop] = useState(false)
    const ctx = useContext(cartContext);

    const closeAll = () => {
        open && setOpen(!open);
        openShop && setOpenShop(!openShop)
    }


    // const boxRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     if (boxRef.current && window.innerWidth < 744) {
    //         gsap.from(boxRef.current, {duration: 1, y: '-100%', ease: 'bounce'})
    //     }
    //     {open && console.log(boxRef.current); }
    // }, [])

    return (
        <section className="sticky top-0 z-50">
            <div className="h-10 bg-violet-200 flex">
                <p className="text-base m-auto font-light cursor-pointer">Free shipping on orders $200+</p>
            </div>
            <main className="flex w-full px-4 justify-between md:justify-center items-center md:gap-8 lg:gap-12 bg-slate-100">

                {/* div1 */}
                <div className={open ?
                    "bg-slate-300 md:bg-slate-100 px-20 py-6 md:py-0 md:px-0 left-0 grid top-[7.5rem] md:top-0 absolute md:relative md:flex gap-10 lg:gap-12 cursor-pointer"
                    :
                    "hidden md:flex md:gap-6 lg:gap-12 cursor-pointer"}>

                    <Link href='/' onClick={closeAll}>
                        <p>Home</p>
                    </Link>
                    <div className="relative">
                        <div className="flex gap-2">
                            <Link href='/shop' onClick={closeAll}><span>Shop</span></Link>
                            <Image
                                src={caret}
                                onClick={() => setOpenShop(!openShop)}
                                className={openShop ? 'rotate-180' : ''}
                                alt="caret" height={10} width={10}
                            />
                        </div>
                        {openShop &&
                            <div className="border-2 border-slate-200 rounded absolute top-14 w-auto h-auto p-16 bg-white">
                                <ul className="grid gap-8 text-xl">

                                    <Link href='/tops' onClick={closeAll}>
                                        <li>Tops</li>
                                    </Link>
                                    <Link href='/bottoms' onClick={closeAll}>
                                        <li>Bottoms</li>
                                    </Link>
                                    <Link href='dresses' onClick={closeAll}>
                                        <li>Dresses</li>
                                    </Link>
                                    <Link href='coords' onClick={closeAll}>
                                        <li>Co-ords</li>
                                    </Link>
                                    <Link href='/sales' onClick={closeAll}>
                                        <li>Sales</li>
                                    </Link>
                                    {/* <li>Jumpsuits</li>
                                    <li>Shoes</li>
                                    <li>Accessories</li> */}
                                </ul>
                            </div>}
                    </div>
                    <Link href='/location' onClick={closeAll}>
                        <p>Locations</p>
                    </Link>
                    <Link href='/contact' onClick={closeAll}>
                        <p className="md:pb-0 pb-6">Contact</p>
                    </Link>
                </div>

                {/* NAV py-2 md:py-0 */}
                <div className="flex w-full py-2 md:py-0 md:w-auto justify-between md:justify-center items-center md:gap-6 lg:gap-12">

                    {/* LOGO */}
                    <Link href='/' onClick={closeAll}>
                        <Image src={logo} alt="logo" height={90} width={90} className="h-16 md:h-24 cursor-pointer" />
                    </Link>

                    {/* div2 */}
                    <div className="flex items-center md:gap-6 lg:gap-12 cursor-pointer">

                        {/* search */}
                        <div className="flex">
                            <p className='md:flex hidden'>Search</p>
                            <Image className="flex md:hidden mr-2 md:mr-0" src={search} alt="search" height={18} width={18} />
                        </div>

                        {/* wishlist */}
                        <Link
                            href='/wishlist'
                            onClick={() => {
                                open && setOpen(!open);
                                openShop && setOpenShop(!openShop)
                            }}
                        >
                            <div className="flex">
                                <Image className="flex md:hidden" src={wish} alt="wish" height={20} width={20} />
                                <span className="hidden md:flex">Wishlist</span>
                                <span className="bg-slate-800 rounded-full ml-[-8px] md:ml-2 mb-8 md:mb-0 text-slate-100 px-2"> {ctx.wishtotal} </span>
                            </div>
                        </Link>

                        {/* cart */}
                        <Link
                            href='/cart'
                            onClick={() => {
                                open && setOpen(!open);
                                openShop && setOpenShop(!openShop)
                            }}
                        >
                            <div className="flex">
                                <Image className="flex md:hidden" src={cart} alt="cart" height={20} width={20} />
                                <span className="hidden md:flex">Cart</span>
                                <span className="bg-slate-800 rounded-full  md:ml-2 ml-[-8px] mb-8 md:mb-0 text-slate-100 px-2"> {ctx.total} </span>
                            </div>
                        </Link>
                        {/* navbars */}
                        {!open &&
                            <Image
                                className="flex md:hidden ml-1 md:ml-0"
                                onClick={() => setOpen(!open)}
                                src={nav}
                                alt='nav'
                                height={15}
                                width={15}
                            />
                        }
                        {open &&
                            <Image
                                className="flex md:hidden ml-1 md:ml-0"
                                onClick={() => setOpen(!open)}
                                src={close}
                                alt='close'
                                height={15}
                                width={15}
                            />
                        }
                    </div>
                </div>
            </main>
        </section>
    )
}