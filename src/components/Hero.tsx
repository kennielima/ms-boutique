
export default function Home() {
  return (
    <div className="bg-cats bg-cover bg-center h-screen flex items-center justify-center">
    {/* style={{ backgroundImage: "url('images/hero.png')" }} */}
      <div className="px-10 md:w-3/4 h-auto text-white text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl my-4">Say Hello To Our Latest Arrivals</h1>
        <p>Discover our latest arrivals.</p>
        <p>Free shipping in the US for any purchase over $200.</p>
        <button className="px-6 py-2 m-6 border-none rounded-full text-lg font-light bg-white text-black hover:bg-black hover:text-white transition-all">Shop Now</button>
      </div>
    </div>
  )
}








// import Image from "next/image";
// import hero from "@/images/hero.png";
// <div className="">
//   <Image className="" src={hero} alt='hero' />
//   <div className="absolute h-auto top-1/4 left-1/4 text-white text-center">
//     <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4">Say Hello To Our <br /> Latest Arrivals</h1>
//     <p className="">Discover our latest arrivals.</p>
//     <p className="">Free shipping in the US for any purchase over $200.</p>
//     <button className="px-6 py-2 m-6 border-none rounded-full text-lg font-light bg-white text-black"> Shop Now</button>
//   </div>
// </div>