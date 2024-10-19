// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const Catagorylist = () => {
//     return (
//         <div className='p-x overflow-x-scroll '>
//             <div className='flex gap-4 md:gap-8'>

// <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6 '> 
// <div className='reletive bg-slate-100 w-full h-96'>
// <Image src="" alt='pic' fill sizes='20vm className="object-cover"
//             />
// </div>
// </Link>

// <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6 '> 
// <div className='reletive bg-slate-100 w-full h-96'>
// <Image src="" alt='pic'/>
// </div>
// </Link> 

// <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6 '> 
// <div className='reletive bg-slate-100 w-full h-96'>
// <Image src="" alt='pic'/>
// </div>
// </Link>
//             </div>
//         </div>
//     );
// }

// export default Catagorylist;
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll '>
      <div className='flex gap-4 md:gap-8'>
        {/* Category 1 */}
        <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src="https://images.unsplash.com/photo-1604176354204-9268737828e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJvdXNlcnN8ZW58MHx8MHx8fDA%3D"
              alt='Category 1'
              fill
              sizes='20vw'
              className="object-cover"
            />
          </div>
        </Link>
<h1></h1>
        {/* Category 2 */}
        <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6'>
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
           src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww"
              alt='Category 2'
              fill
              sizes='20vw'
              className="object-cover"
            />
          </div>
        </Link>

        {/* Category 3 */}
        <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6'>
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src="https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt='Category 3'
              fill
              sizes='20vw'
              className="object-cover"
            />
             
          </div>
        </Link>

        <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6'>
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src="https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt='Category 3'
              fill
              sizes='20vw'
              className="object-cover"
            />
             
          </div>
        </Link>

        <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6'>
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src="https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt='Category 3'
              fill
              sizes='20vw'
              className="object-cover"
            />
             
          </div>
        </Link>
        <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6'>
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src="https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt='Category 3'
              fill
              sizes='20vw'
              className="object-cover"
            />
             
          </div>
        </Link>

        <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/6'>
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src="https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt='Category 3'
              fill
              sizes='20vw'
              className="object-cover"
            />
             
          </div>
        </Link>

      </div>
    </div>
  );
};

export default CategoryList;
