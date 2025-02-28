import React, { useState } from "react";
import { useParams } from "react-router-dom";
import serviceData from "../../assets/serviceData";
import { IoCalendarOutline, IoSearch } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import { FaArrowLeft } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineStarHalf } from "react-icons/md";

function SearchBar() {
  return (
    <>
      <button className="inline text-[#153350] p-2 rounded-full hover:bg-gray-200 transition-all duration-300">
        <FaArrowLeft className="w-8 h-8" />
      </button>
      <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md w-full h-14">
        <IoSearch className="text-gray-500 w-6 h-6 mr-2" />
        <input
          type="text"
          placeholder="Search for a provider..."
          className="flex-grow outline-none text-gray-700 font-medium text-lg placeholder-gray-400"
        />
      </div>
    </>
  );
}

function ServiceDetail() {
  const { serviceName } = useParams();
  const providers = serviceData.filter((provider) => provider.service === serviceName);
  
  return (
    <div className="">
      <div className='container border-b-4 border-gray-200 pb-6'>
        <div className='border-b-2 flex justify-center px-9 py-4 border-gray-200'>
          <SearchBar />
        </div>
        <div className="text-2xl font-semibold mt-4 ml-9">{providers.length} Services for "{serviceName}"</div>
      </div>
      <div className="container mt-4 px-9">
        <h3 className="text-xl font-semibold">Available Workers</h3>
        <select className="block w-28 px-3 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="" disabled selected hidden>Sort By</option>
          <option value="name">Name</option>
          <option value="date">Date</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div className="container mt-6 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {providers.map((provider) => (
          <ServiceCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ provider }) {
  const [status, setStatus] = useState(provider.availability === "Available");
  return (
    <div className="border border-gray-300 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:border-blue-500">
      <div className='grid grid-cols-3 w-100 p-2 border-b-2 border-gray-500 border-dashed bg-gradient-to-r from-gray-100 to-white'>
        <img src={provider.image} alt={provider.name} className="h-40 w-40 mr-2 rounded-lg object-cover" />
        <div className='h-40 w-100 p-2 col-span-2'>
          <h5 className="text-lg font-semibold">{provider.name}</h5>
          <p className="flex items-center text-amber-700 font-medium">
            <MdOutlineStarHalf className='mr-1' /> {provider.rating} <span className="text-gray-600 ml-1">({provider.reviews} Reviews)</span>
          </p>
          <p className="text-gray-700">{provider.completed_jobs} similar jobs completed</p>
          <p className="text-xl font-bold text-blue-700">₹ {provider.price}</p>
        </div>
      </div>
      <div className="flex justify-between px-4 py-3 bg-white text-gray-700">
        <div className="flex items-center"><IoCalendarOutline className="mr-2" /> {provider.slots} slot</div>
        <div className="flex items-center"><ImLocation2 className="mr-2" /> {provider.location}</div>
        {status ? (
          <div className="flex items-center text-green-600 font-medium"><GrStatusGood className="mr-1" /> Available</div>
        ) : (
          <div className="flex items-center text-red-600 font-medium"><RxCrossCircled className="mr-1" /> Busy</div>
        )}
      </div>
    </div>
  );
}

export default ServiceDetail;
