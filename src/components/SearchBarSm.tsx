import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

const SearchBarSm = () => {
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/search?query=${encodeURIComponent(search)}`);
  };

  return (
    <div>
      <div className="flex items-center relative px-8 mt-5">
        <CiSearch onClick={handleSearch} className='text-white absolute left-12 h-6 w-6 lg:hidden md:hidden' />
        <input 
          type="text"
          onChange={handleChange}
          value={search}
          placeholder="Search for lesson"
          className='bg-[#040B35] lg:hidden md:hidden rounded-md pl-12 h-12 w-full text-sm text-white border border-[grey]'
        />
      </div>
    </div>
  );
};

export default SearchBarSm;
