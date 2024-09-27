"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FiShoppingCart } from 'react-icons/fi';

import { IoNotificationsOutline } from 'react-icons/io5';
import Cartmodal from './cartmodal';
// import { FaShoppingCart } from 'react-icons/fa';



// i used router  hook to push the page
const Navbaricones = () => {
  const[isPofileOpen,setIsProfileOpen]=useState(false);
  const[isCartOpen,setIsCartOpen]=useState(false); 
  const router=useRouter();
  


  // when you click on the prfile icon it will be handeled with this
  const isLoggedIn=false;

  // handle proile
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } 
      setIsProfileOpen((prev) => !prev);   
    
  };
  // handle cart
  const handleCart = (event: React.MouseEvent<SVGElement>) => { // Correct type for event
    event.preventDefault();
    setIsCartOpen((prev) => !prev);  // Toggle cart modal
  };

    return (
       <div className='flex items-center xl:gap-6 gap-4 relative'>
        <CgProfile size={22} onClick={handleProfile} className='cursor-pointer'/>  
        {
          isPofileOpen && <div
           className='absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
         <Link href="/profile">Profile</Link>
         <div className='mt-2 cursor-pointer'>logout</div>
          </div>
        }
        <IoNotificationsOutline size={22}  className='cursor-pointer' />  
        <div className='relative cursor-pointer'>
       < FiShoppingCart  size={22}  className='cursor-pointer' onClick={handleCart} />
       </div>
       
       <div className='absolute -top-4 right-4 w-6 h-6 bg-instaShop rounded-full text-sm text-white flex items-center justify-center'>2</div>
       {
        isCartOpen && (
           <div>
         <Cartmodal/>
           </div>
                 )
       
       }
      
      </div>
    
    );
}

export default Navbaricones;

