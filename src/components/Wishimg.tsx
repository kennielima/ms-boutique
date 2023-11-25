// import Image from 'next/image'
// import React, { useContext, useState } from 'react'
// import { detail, latests } from './latestsInterface';
// import { cartContext } from './ContextProvider';

// function Wishimg(props:latests) {
//     const { addWish, removeWish } = useContext(cartContext);
//     const [liked, setLiked] = useState(false)

//     let cartinfo: latests = {
//             dress: props.dress,
//             image: props.image,
//             price: props.price,
//             id: props.id

//     };


//     const like = () => {
//         setLiked((prevLiked) => {
//             const newState = !prevLiked;
//             newState ? addWish(cartinfo) : removeWish(cartinfo);
//             return newState;
//           });
//         }
//     let wishimg = liked ? '/images/wishess.svg' : '/images/wishes.svg'

//     return (
//         <div>
//             <Image
//                 src={wishimg}
//                 onClick={like}
//                 alt='love'
//                 height={50}
//                 width={50}
//                 className='h-10 w-10 bg-white p-2 rounded-full border-slate-400 border-[1px]'
//             />
//         </div>
//     )
// }

// export default Wishimg