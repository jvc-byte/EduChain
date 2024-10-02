import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
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
      <div className="flex items-center relative">
        <CiSearch onClick={handleSearch} className="text-white absolute left-4 h-6 w-6 sm-hidden" />
        <input 
          type="text"
          onChange={handleChange}
          value={search}
          placeholder="Search for lesson"
          className="bg-[#040B35] rounded-md pl-12 h-12 w-full lg:w-96 text-white border border-gray-400"
        />
      </div>
    </div>
  );
};

export default SearchBar;
