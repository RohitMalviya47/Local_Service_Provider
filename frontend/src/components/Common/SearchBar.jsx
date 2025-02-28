import React, { useState } from "react";
import { Search, Mic, MapPin } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const allData = ["Plumber", "Electrician", "Carpenter", "Painter", "Mechanic"];
  const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

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
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto my-10 px-4">
      {/* Location Selector */}
      <div className="w-full mb-4 flex items-center justify-center">
        <div className="relative w-full max-w-xs">
          <MapPin size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full appearance-none bg-gray-100 text-gray-900 pl-10 pr-4 py-2 rounded-lg text-lg font-medium border-2 border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          >
            <option value="">Select Location</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full flex items-center bg-white shadow-md rounded-full border-2 border-gray-300 p-1.5 focus-within:ring-2 focus-within:ring-orange-400">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for services..."
          className="flex-1 px-4 py-2 outline-none text-gray-900 bg-transparent text-lg w-full"
        />
        <button className="p-2 hover:text-orange-600  rounded-full transition-all duration-200">
          <Mic size={20} />
        </button>
        <button className="p-2 rounded-full hover:text-orange-600 transition-all duration-200">
          <Search size={20} />
        </button>
      </div>

      {/* Suggestions Box */}
      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border mt-2 rounded-lg shadow-xl z-10 text-base font-medium max-w-lg">
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
