// "use client";

// import Image from 'next/image';
// import React from 'react';

// const Cartmodal = () => {
//     const cartItem=true;
//     return (
//         <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
//          {
//       !cartItem? (
//         <div>its empty </div>
//         ) :(
//           <div className=''>
//  <div className="flex flex-col justify-between w-full">               
// <Image src="https://images.unsplash.com/photo-1472586662442-3eec04b9dbda?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  width={72} height={96} className='object-cover rounded-md'/>

      
          

//         </div>
//     );
// }

// export default Cartmodal;
// "use client";

// import Image from 'next/image';
// import React from 'react';

// const Cartmodal = () => {
//     const cartItem=true;
//     return (
//         <div className=' w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
//          {
//       !cartItem? (
//         <div>its empty </div>
//         ) :(
//           <>
//         {/* list */}
//         <div className='flex flex-col gap-8'>
//           <div className='flex gap-4'>
//  <Image
  
  
   
// src=""
//   alt=""
//   width={72}
//   height={96}
//   className="object-cover rounded-md "
// />
//                <div className='flex flex-col justify-between w-full'>
// {/* Top */}
// <div>
// {/* title */}
// <div className='flex items-center justify-between gap-8'>
//  <h3 className='font-semibold'>product name </h3>
// <div className='p-1 bg-gray-50 rounded-sm'>56$</div>
// </div>

// {/* desc */}
// <div className='text-sm text-gray-500'>availble</div>
// </div>

// {/* bottom */}
// <div className='flex justify-between text-sm'>
// <span className='text-gray-400'> quantity .2</span>

// <span>remove</span>
// </div>

//                </div>

//           </div> 
         
//         )  
// }
//         </div>
//         //bottom
       
//     );
// }

// export default Cartmodal;

"use client";

import Image from 'next/image';
import React from 'react';

const Cartmodal = () => {
    const cartItem = true;
    return (
        <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
            {
                !cartItem ? (
                    <div>It's empty</div>
                ) : (
                    <>
                        {/* List */}
                        <div className='flex flex-col gap-8'>
                            <div className='flex gap-4'>
                                <Image
                                    src=""  
                                    alt="Product Image"
                                    width={72}
                                    height={96}
                                    className="object-cover rounded-md"
                                />
                                <div className='flex flex-col justify-between w-full'>
                                    {/* Top */}
                                    <div>
                                        {/* Title */}
                                        <div className='flex items-center justify-between gap-8'>
                                            <h3 className='font-semibold'>Product Name</h3>
                                            <div className='p-1 bg-gray-50 rounded-sm'>$56</div>
                                            
                                        </div>

                                        {/* Description */}
                                        <div className='text-sm text-gray-500'>Available</div>
                                    </div>

                                    {/* Bottom */}
                                    <div className='flex justify-between text-sm'>
                                        <span className='text-gray-500 '>quantity :2</span> 
                                        <span className='text-red-500 cursor-pointer '>Remove</span>
                                        <p className='text-gray-500 text-sm'>
                                        {/* <button>view  cart</button>
                                        <button>check out</button> */}
                                        {/* <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p> */}
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 gap-5">
                View Cart
              </button>
              <button
                className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"

              >
                Checkout
              </button>
            </div>



                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Cartmodal;
