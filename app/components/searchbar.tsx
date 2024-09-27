"use client"



import { useRouter } from 'next/navigation';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
    
        if(name){
          router.push(`/list?name=${name}`)
        }
      };
    return (
       <form className='flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1'  onSubmit={handleSearch} >
        <input   name="name" type="text" className='flex items-center justify-between gap-4 bg-gray-100 bg-transparent p-2 rounded-md flex-1'  placeholder='search..'/>
        <button>
        <FiSearch height={16} width={16}/>
        </button>
       </form>
    );
}

export default Searchbar;
