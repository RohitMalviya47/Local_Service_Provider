import React, { useState } from "react";
import { Search, Mic, MapPin } from "lucide-react"; // Icons Library

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(""); // Search Query
  const [location, setLocation] = useState(""); // Selected Location
  const [suggestions, setSuggestions] = useState([]); // Suggestions List

  // Dummy Data (Replace with API Data)
  const allData = ["Plumber", "Electrician", "Carpenter", "Painter", "Mechanic"];
  const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]; // Dummy Locations

  // Handle Search
  const handleSearch = (value) => {
    setQuery(value);
    if (value.length > 0) {
      const filtered = allData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search Bar Container */}
      <div className="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-full p-3 sm:p-4 w-full border-2 border-gray-300">
        
        {/* Location Selector */}
        <div className="flex items-center bg-gray-200 px-4 py-2 sm:px-5 sm:py-3 rounded-full text-gray-800 text-base sm:text-lg cursor-pointer font-medium w-full sm:w-auto">
          <MapPin size={18} className="mr-2 text-gray-600" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent text-gray-800 border-none outline-none cursor-pointer text-base sm:text-lg font-semibold w-full"
          >
            <option value="">Select Location</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for services..."
          className="flex-1 px-4 py-2 sm:px-6 sm:py-3 outline-none text-gray-900 bg-transparent text-lg sm:text-xl w-full"
        />

        {/* Voice Search Button */}
        <button className="text-blue-600 p-2 sm:p-3 hover:bg-gray-100 rounded-full transition-all duration-200">
          <Mic size={20} />
        </button>

        {/* Search Button */}
        <button className="bg-orange-500 text-white p-2 sm:p-3 rounded-full hover:bg-orange-600 transition-all duration-200">
          <Search size={20} />
        </button>
      </div>

      {/* Suggestions Box */}
      {suggestions.length > 0 && (
        <ul className="absolute left-0 w-full bg-white border mt-3 rounded-lg shadow-xl z-10 text-base sm:text-lg font-medium">
          {suggestions.map((item, index) => (
            <li
              key={index}
              className="p-3 cursor-pointer hover:bg-gray-100 transition-all duration-200"
              onClick={() => {
                setQuery(item);
                setSuggestions([]);
                onSearch(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
