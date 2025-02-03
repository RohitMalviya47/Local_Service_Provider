// // Signup.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // For navigation

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Hook to navigate

//   const handleSignup = () => {
//     // Handle signup logic here
//     console.log('Signing up with', name, email, password);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 via-green-500 to-blue-500">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
//         <input
//           type="text"
//           className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           className="w-full bg-green-600 text-white py-3 rounded-lg mb-4 hover:bg-green-700 transition"
//           onClick={handleSignup}
//         >
//           Sign Up
//         </button>
//         <div className="text-center">
//           <button
//             className="text-blue-500 hover:text-blue-700"
//             onClick={() => navigate('/login')} // Navigate to login page
//           >
//             Already have an account? Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
