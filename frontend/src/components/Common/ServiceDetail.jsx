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
      <button className="inline text-[#153350] p-2 rounded-full">
        <FaArrowLeft className="w-8 h-8" />
      </button>
      <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md w-100 h-18 ">
      <IoSearch className="text-gray-500 w-8 h-8 mr-2" />
      <input
        type="text"
        placeholder="! Person , Who You Are Find "
        className="flex-grow outline-none text-gray-700 font-bold text-2xl placeholder:text-xl placeholder-gray-400"
      />
      </div>
    </>
  );
}

function ServiceDetail() {
  const { serviceName } = useParams();
  const providers = serviceData.filter((provider) => provider.service === serviceName);
  
  return (
    <div className=" ">
    <div className='container border-b-4 border-gray-200 pb-11'>
    <div className='border-b-2 flex justify-center px-9 py-4 border-gray-200 '>
          <SearchBar />
        </div>
        <div className="text-2xl mt-4 ml-9">{providers.length} Services for "{serviceName}"</div>
      </div>
      <div className="container">
        <div className="ml-9">
          <h3 className="mt-4">Available Workers</h3>
          <div className="relative flex justify-between ">
          <select id="sort" class="block w-24 px-2 h-13 py-3 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">              <option value="" disabled selected hidden>Sort</option>
          <option value="" disabled selected hidden>Short</option>
              <option value="name">Name</option>
              <option value="date">Date</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
          {providers.map((provider) => (
            <Demo1 key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Demo1({ provider }) {
  const [status, setStatus] = useState(provider.availability === "Available");
  return (
    <div>
<div className='border-2 border-gray-300 w-100 rounded-lg'>
<div className='grid grid-cols-3 w-100 p-2 border-b-2 border-gray-500 border-dashed '>
<img src={provider.image} alt={provider.name} className="h-40 w-40 mr-2 rounded-lg object-cover " />
          <div className='h-40 w-100 p-2 col-span-2'>
            <h5>{provider.name}</h5>
            <p>
            <span ><MdOutlineStarHalf className='inline mr-1 font-bold mb-1 text-amber-700'/></span>
              <span className="font-bold text-amber-700">{provider.rating} </span>
              <span>({provider.reviews} Reviews)</span>
            </p>
            <p>{provider.completed_jobs} new similar jobs</p>
            <p className="text-2xl">₹ {provider.price}</p>
          </div>
        </div>
        <div className="flex justify-between m-2">
          <div className="w-33 text-center flex justify-center">
            <IoCalendarOutline className="mt-1 mr-1" /> {provider.slots} slot
          </div>
          <div className="w-33 text-center flex justify-center">
            <ImLocation2 className="mt-1 mr-1" /> {provider.location}
          </div>
          {status ? (
            <div className="w-33 text-center text-green-700 flex justify-center">
              <GrStatusGood className="mt-1 mr-1" /> Available
            </div>
          ) : (
            <div className="w-33 text-center text-red-800 flex justify-center">
              <RxCrossCircled className="mt-1 mr-1" /> Busy
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
