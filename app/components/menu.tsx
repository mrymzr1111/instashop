// "use client"

// import { useState } from "react";

// import Link from 'next/link';
// import React, { useState } from 'react';
// import { FiAlignJustify } from 'react-icons/fi';

// const Menu = () => {
//     const[open,setOpen]=useState(false);
// const navs=[
//    {
//     title:"Home",
//     link:"/"
//    }
//    ,
//    {
//      title:"Home",
//     link:"/"
//    }


// ]

//     return (
//         <div className="" >
      
//         {/* take the previo value and make it visa versa */}
//         {/* <Image alt='' src="<FiAlignJustify />" width={28} height={28} className='cursor-pointer'
//          onClick={()=>{setOpen(prev=>!prev)}}/> */}
//            <FiAlignJustify
//                 size={28} 
//                 className="cursor-pointer"
//                 onClick={() => setOpen(prev => !prev)} 
//             />{
//                 open &&(<div>
//                 { navs.map((item)=>(
// <li>
// <Link  href={'${item.link}'}>
// {item.title}
// </Link>
// </li>
//                  ))
                

//                 </div>)
//             }
            



// </div>



//         )
        
 
 

       
   
// }

// export default Menu;
// // {/* copy this */}





// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { FiAlignJustify } from "react-icons/fi";

// const Menu = () => {
//   const [open, setOpen] = useState(false);

//   const navs = [
//     {
//       title: "Home",
//       link: "/",
//     },
//     {
//       title: "Shop",
//       link: "/shop",
//     },
//     {
//       title: "About",
//       link: "/about",
//     },
//     {
//       title: "Contact",
//       link: "/contact",
//     },
//   ];

//   return (
//     <div>
//       {/* Icon to toggle the menu */}
//       <FiAlignJustify
//         size={28}
//         className="cursor-pointer"
//         onClick={() => setOpen((prev) => !prev)}
//       />

//       {/* Conditional rendering for the menu */}
//       {open && (
//         <div className="absolute bg-white left-0 top-12 p-4 space-y-2 w-64">
//           <ul className="space-y-2">
//             {navs.map((item, index) => (
//               <li key={index}>
//                 <Link href={item.link}>
//                   <a className="text-gray-800 hover:text-blue-600">{item.title}</a>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Menu;

"use client";


import Link from 'next/link';
import { useState } from 'react';

import { FiAlignJustify } from 'react-icons/fi';
interface NavItem {
    title: string;
    link: string;
  }
  

  interface MenuProps {
    navs: NavItem[]; 
  }
const Menu: React.FC<MenuProps> = ({ navs}) => {
    const [open, setOpen] = useState(false);

   
    // const navs = [
    //     {
    //         title: "HomePage",
    //         link: "/"
    //     },
    //     {
    //         title: "Shop",
    //         link: "/shop"
    //     },
    //     {
    //         title: "About",
    //         link: "/About"
    //     }
    //     ,
    //     {
    //         title: "contact",
    //         link: "/contact"
    //     }
    //     ,
    //     {
    //         title: "logout",
    //         link: "/logout"
    //     }
    // ];

    return (
        <div>
           {/* icone  */}
            <FiAlignJustify
                size={28} 
                className="cursor-pointer"
                onClick={() => setOpen(prev => !prev)} 
            />
            
            
            {open && (
                <div className="absolute bg-black text-white left-0 top-20 p-4 space-y-2 w-full
                 h-[calc(100vh-80px)] flex flex-col  gap-x-10 text-xl ">
                    <ul>
                        {navs.map((item, index) => (
                            <li key={index} className="py-1">
                                <Link  className='' href={item.link}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Menu;






