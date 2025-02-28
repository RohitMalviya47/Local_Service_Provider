// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Electrician from '../../assets/electrician.png';
// import Plumber from "../../assets/plumber.png";
// import Carpenter from "../../assets/carpenter.png";
// import Painter from "../../assets/painting.png";
// import ServiceCard from "../Common/ServiceCard";

// const ServicesGrid = () => {
//   const navigate = useNavigate(); // Navigation hook

//   const services = [
//     { title: "Electrician", image: Electrician },
//     { title: "Plumber", image: Plumber },
//     { title: "Carpenter", image: Carpenter },
//     { title: "Painter", image: Painter },
//   ];

//   return (
//     <div className="container mx-auto py-12 border-amber-950">
//       <h2 className="text-center text-3xl font-semibold mb-5">Our Services</h2>
      
//       {/* GRID LAYOUT */}
//       <div className="grid grid-cols-5 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  border-amber-950">
//         {services.map((service, index) => (
//           <ServiceCard
//             key={index}
//             title={service.title}
//             image={service.image}
//             onClick={() => navigate(`/service/${service.title}`)} // Navigate to service detail page
//           />
//         ))}
//       </div>
      
//       {/* See All Services Button */}
//       <div className="text-center mt-5">
//         <button
//           onClick={() => navigate("/services")}
//           className="bg-red-700 text-white px-4 py-2 rounded"
//         >
//           See All Services
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServicesGrid;
