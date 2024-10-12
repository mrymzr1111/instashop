


// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import { useState } from "react";

// const slides=[
//     {id:1,
//         title:"bag",
//         description:"sale!",
//         img:""
//     },
//     {id:2,
//         title:"clothes",
//         description:"sale!",
//         img:""
//     },
//     {id:3,
//         title:"watch",
//         description:"sale!",
//         img:"",
//         url:"/",
//         bg:""
//     },
//     {id:4,
//         title:"gloves",
//         description:"sale!",
//         img:""
//     }
   
// ]
// const Slider = () => {
// const [current,setCurrent]=useState(0);


//     return (
//         <div className="h-[calc(100vh-88px) overflow-hidden]">
//             <div className="w-max h-full transition-all ease-in-out duration-1000">
            
//           {
//             slides.map(slide=>(
//            <div  key={slide.id}>
// <div className="w-1/2">
//     <h2>{slide.description}</h2>
//     <h2>{slide.title}</h2>
    
//     <Link>
//      <button>shop now </button>
//     </Link>
// </div>
// {/* images */}
// <div className="  w-1/2 relative">
//     <Image src={slide.img} fill alt="photo" sizes="100%" className="object-cover"/>
// </div>

//            </div>
//             ))
//           }  
      
//     </div>

                
//             </div>
        
        
//     );
// }

// export default Slider;

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// // these stuff come from backend
// const slides = [
//   {
//     id: 1,
//     title: "kafsh",
//     description: "Sale! Up to 50% off!",
//     img: "https://images.unsplash.com/photo-1582004531564-50f300aae039?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluc3RhZ3JhbSUyMHNob3B8ZW58MHx8MHx8fDA%3D",
//     url: "/",
//     bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
//   },
//   {
//     id: 2,
//     title: "kif",
//     description: "Sale! Up to 50% off!",
//     img: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGluc3RhZ3JhbSUyMHNob3B8ZW58MHx8MHx8fDA%3D",
//     url: "/",
//     bg: "bg-gradient-to-r from-pink-50 to-blue-50",
//   },
//   {
//     id: 3,
//     title: "manto",
//     description: "Sale! Up to 50% off!",
//     img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     url: "/",
//     bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
//   },
// ];


// const Slider = () => {
//   const [current, setCurrent] = useState(0);
// //these codes Are for slider
//   return (
//     // <div className="h-[calc(100vh-88px) overflow-hidden]">
//     <div className="h-[calc(100vh-88px)] overflow-hidden">
//       <div className="w-max h-full transition-all ease-in-out duration-1000">
   
//         {slides.map((slide) => (
//         // text and pic con
//          <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id} >
//             <div className="xl:w-1/2 h-1/2 ">
//               <h2 >{slide.description}</h2>
//               <h2 >{slide.title}</h2>

//               {slide.url && (
//                 <Link href={slide.url}>
//                   <button>Shop Now</button>
//                 </Link>
//               )}
//             </div>

//             {/* Image section  for our prod */}
//             {/* <div className=" h-1/2 xl:w-1/2  relative"> */}
//             <div className="h-1/2 xl:w-1/2 relative">
//               <Image
//                 src={slide.img}
//                 fill
//                 alt="photo"
//                 sizes="100%"
//                 className="object-cover"
               
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// these slides come from backend
const slides = [
  {
    id: 1,
    title: "kafsh",
    description: "Sale! Up to 50% off!",
    img: "https://images.unsplash.com/photo-1582004531564-50f300aae039?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluc3RhZ3JhbSUyMHNob3B8ZW58MHx8MHx8fDA%3D",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "kif",
    description: "Sale! Up to 50% off!",
    img: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGluc3RhZ3JhbSUyMHNob3B8ZW58MHx8MHx8fDA%3D",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "manto",
    description: "Sale! Up to 50% off!",
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // Function to go to next slide
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="h-[calc(100vh-88px)] overflow-hidden relative">
      {/* Slider Container */}
      <div
        className="w-full h-full transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* Slide Text */}
            <div className="xl:w-1/2 h-1/2 ">
              <h2>{slide.description}</h2>
              <h2>{slide.title}</h2>

              {slide.url && (
                <Link href={slide.url}>
                  <button>Shop Now</button>
                </Link>
              )}
            </div>

            {/* Image section */}
            <div className="h-1/2 xl:w-1/2 relative">
              <Image
                src={slide.img}
                fill
                alt="photo"
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-200 p-2"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-200 p-2"
      >
        Next
      </button>
    </div>
  );
};

export default Slider;

