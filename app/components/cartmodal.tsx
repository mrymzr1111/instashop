
"use client";

import Image from 'next/image';
import React from 'react';

const Cartmodal = () => {
    const cartItem = true;
    return (
        <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
            {
                // I NEED TO GET THEM FROM BACKEND
                !cartItem ? (
                    <div>سبد خرید خالی است</div>
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
                                            <h3 className='font-semibold'>نام محصول</h3>
                                            <div className='p-1 bg-gray-50 rounded-sm'>۵۶۰,۰۰۰ ریال</div>
                                        </div>

                                        {/* Description */}
                                        <div className='text-sm text-gray-500'>موجود</div>
                                    </div>

                                    {/* Bottom */}
                                    <div className='flex justify-between text-sm'>
                                        <span className='text-gray-500'>تعداد: ۲</span> 
                                        <span className='text-red-500 cursor-pointer'>حذف</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-between text-sm mt-4">
                                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                                    مشاهده سبد خرید
                                </button>
                                <button
                                    className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                                >
                                    پرداخت
                                </button>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Cartmodal;

