"use client";

import { Search } from 'lucide-react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React, { useState, useEffect, useCallback } from 'react'

const Searchbar = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname();
  const { replace } = useRouter();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const query = searchParams.get('query');
    setInputValue(query || '');
  }, [searchParams]);

  const handleSearch = useCallback((searchTerm: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (searchTerm) {
      params.set("query", searchTerm);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [pathname, replace, searchParams]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, handleSearch]);

  return (
    <div className='relative flex flex-1'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input 
        className='w-full p-2 border rounded-lg pl-10'
        placeholder='Search'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
    </div>
  )
}

export default Searchbar