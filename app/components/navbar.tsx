
// import Link from 'next/link';
// import React from 'react';
// import Menu from './menu';

// import Searchbar from './searchbar';
// import dynamic from 'next/dynamic';
// const Navbaricones = dynamic(() => import("./navbaricones"), { ssr: false });
// const Navbar = () => {
//   // Navigation links
//   const navs = [

//     {
//         title: "logout",
//         link: "/logout"
//     }
//     ,
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
   
// ];





//     return (
//         // px-4  as a big screen padding
//         <div className='h-20 px-4  md:px-8 lg:px-16 xl:32 2xl:px-64  relative'>
//          {/*mobile */}
// <div className=' h-full flex items-center justify-end     md:hidden'  >

// <Link href="/"> <div className='text-2xl tracking-wide  '>INSTA SHOP</div></Link>    


//     <Menu  navs={navs} />     
// </div>
// {/* bigger screen */}
//  <div className='hidden md:flex items-center justify-between gap-8 h-full'>
//  {/* left */}
// <div className='w-1/3 xl:w-1/2 flex items-center gap-12 '>
// <Link href="/"  className="flex items-center gap-3">
// <div className='text-2xl tracking-wide  '>INSTA SHOP</div>      </Link>
// <div className="hidden xl:flex gap-4 list-none left-4">
// {navs.map((item, index) => (
//                             <li key={index} className="">
//                                 <Link  className='flex items-center gap-3' href={item.link}>
//                                     {item.title}
//                                 </Link>
//                             </li>
//                         ))}  
// {/* {/* <Link href="/"> <div className='text-2xl tracking-wide  '>INSTA SHOP</div></Link>   
// </div> */}
// </div>
// {/* right */}
// <div className='w-2/3 flex items-center  justify-between gap-8 rtl:right-8'>
//  <Searchbar/>  

//   {/* <Navbaricones/>  */}

// </div>
//  </div>

// </div>

//     );
// }

// export default Navbar;

// import Link from 'next/link';
// import React from 'react';
// import Menu from './menu';
// import Searchbar from './searchbar';
// import dynamic from 'next/dynamic';

// const Navbaricones = dynamic(() => import("./navbaricones"), { ssr: false });

// const Navbar = () => {
//   // Navigation links
//   // const navs = [
//   //   { title: "Logout", link: "/logout" },
//   //   { title: "HomePage", link: "/" },
//   //   { title: "Shop", link: "/shop" },
//   //   { title: "About", link: "/about" },
//   //   { title: "Contact", link: "/contact" },
//   // ];

//   return (
//     <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
//       {/* Mobile view */}
//       <div className='h-full flex items-center justify-between md:hidden'>
//         <Link href="/">
//           <div className='text-2xl tracking-wide'>INSTA SHOP</div>
//         </Link>
//         <Menu navs={navs} />
//       </div>

//       {/* Larger screen view */}
//       <div className='hidden md:flex items-center justify-between gap-8 h-full'>
//         {/* Left section */}
//         <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
//           <Link href="/" className="flex items-center gap-3">
//             <div className='text-2xl tracking-wide'>INSTA SHOP</div>
//           </Link>
//           <ul className="hidden xl:flex gap-4 list-none">
//             {/* {navs.map((item, index) => (
//               <li key={index} className="">
//                 <Link className='flex items-center gap-3' href={item.link}>
//                   {item.title}
//                 </Link>
//               </li>
//             ))} */}
//           </ul>
//         </div>

//         {/* Right section */}
//         <div className='w-2/3 flex items-center justify-between gap-8 rtl:right-8'>
//           <Searchbar />
//           {/* Uncomment to include Navbar icons */}
//           {/* <Navbaricones /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import Link from 'next/link';
// import React from 'react';
// import Menu from './menu';
// import Searchbar from './searchbar';
// import dynamic from 'next/dynamic';

// const Navbaricones = dynamic(() => import("./navbaricones"), { ssr: false });

// const Navbar = () => {
//   // Navigation links
//   const navs = [
//     { title: "Logout", link: "/logout" },
//     { title: "HomePage", link: "/" },
//     { title: "Shop", link: "/shop" },
//     { title: "About", link: "/about" },
//     { title: "Contact", link: "/contact" },
//   ];

//   return (
//     <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
//       {/* Mobile view */}
//       <div className='h-full flex items-center justify-between md:hidden'>
//         <Link href="/">
//           <div className='text-2xl tracking-wide'>INSTA SHOP</div>
//         </Link>
//         {/* Pass navs to the Menu component */}
//         <Menu navs={navs} />
//       </div>

//       {/* Larger screen view */}
//       <div className='hidden md:flex items-center justify-between gap-8 h-full'>
//         {/* Left section */}
//         <div className='w-1/2 flex items-center gap-12'>
//           <Link href="/" className="flex items-center gap-3">
//             <div className='text-2xl tracking-wide'>INSTA SHOP</div>
//           </Link>
//           {/* Adding Searchbar next to the INSTA SHOP logo */}
//           <Searchbar />
//         </div>

//         {/* Right section */}
//         <div className='w-1/2 flex items-center justify-end gap-8'>
//           <ul className="hidden xl:flex gap-4 list-none">
//             {navs.map((item, index) => (
//               <li key={index} className="">
//                 <Link className='flex items-center gap-3' href={item.link}>
//                   {item.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <Navbaricones />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import Link from 'next/link';
import React from 'react';
import Menu from './menu';
import Searchbar from './searchbar';
import dynamic from 'next/dynamic';
import { FiSearch } from 'react-icons/fi';

const Navbaricones = dynamic(() => import("./navbaricones"), { ssr: false });

const Navbar = () => {
  // Navigation links
  const navs = [
   
    { title: "خروج", link: "/logout" },
    { title: "صفحه اصلی", link: "/" },
    { title: "فروشگاه", link: "/shop" },
    { title: "درباره ما", link: "/about" },
    { title: "تماس با ما", link: "/contact" }
  ];

  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64   relative '>
      {/* Mobile view */}
      <div className='h-full flex items-center justify-between md:hidden'>
      
        <Link href="/">
          <div className='text-2xl tracking-wide'>INSTA SHOP</div>
        </Link>
        <div className='flex-1 px-4 '>
          <Searchbar />
        </div>
        {/* Pass navs to the Menu component */}
        <Menu navs={navs} />
      </div>

      {/* Larger screen view */}
      <div className='hidden md:flex items-center justify-between gap-8 h-full'>
        {/* Left section */}
        <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
          <Link href="/" className="flex items-center gap-3">
            <div className='text-2xl tracking-wide'>INSTA SHOP</div>
          </Link>
         
          <ul className="hidden xl:flex gap-4 list-none">
            {navs.map((item, index) => (
              <li key={index} className="">
                <Link className='flex items-center gap-3' href={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right section */}
        <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8 rtl:right-8'>
          <Searchbar />
          <Navbaricones />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
