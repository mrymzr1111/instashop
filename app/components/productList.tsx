import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductList = () => {
    return (
        <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
 <div className='relative w-full h-80'>
<Image
 src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D" 
 alt='' fill sizes='25vw'
    className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500     '

 />
 <Image
 src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D" 
 alt='' fill sizes='25vw'/>
 </div>

 {/*ATTENTION  I NEED TO FIX  IT THEY SHOULD COME FROM BACKEND */}
<div className='flex justify-between'>

<span className='font-semibold'>۴۹۰,۰۰۰ ریال </span>
<span className='font-medium'>نام محصول </span>
</div>

<div className='text-sm text-gray-500'>توضیحات من</div>
{/* <button  className='rounded-2xl w-max ring-offset-red-400 text-rose-400 py-2 px-4 text-xs hover:bg-pink-300 hover:text-white  '> Add To Cart</button> */}
<button 
  className='
    rounded-3xl
    w-max 
    bg-gradient-to-r 
    from-purple-400 
    via-pink-500 
    to-red-400
    text-white
    py-3 
    px-8 
    text-sm 
    font-bold 
    shadow-lg 
    transition 
    duration-300 
    ease-in-out 
    transform 
    hover:scale-105 
    focus:outline-none 
    focus:ring-4 
    focus:ring-pink-300
  ' 
  aria-label="Add to Cart"
>
افزودن به سبد خرید
</button>





            </Link>
        </div>
    );
}

export default ProductList;
