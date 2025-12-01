// import {Link}from 'react-router-dom'
// const Login = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
      

//                 <h2 className="text-3xl font-bold text-center mb-6">Login</h2>


//         <form className="space-y-4">
//           <div>
//             <label className="block font-medium mb-1">Email</label>
//             <input
//               type="email"
//               className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-1">Password</label>
//             <input
//               type="password"
//               className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
//               placeholder="Enter your password"
//             />
//           </div>
//       <Link   to="/Cards">        
 
// <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//             Login
//           </button>
              
//         </Link>
          
//         </form>

//         <p className="text-center text-gray-600 mt-4">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-blue-600 font-medium">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-gray-900 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
        className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Login
        </h2>

        <form className="space-y-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your password"
            />
          </motion.div>

          <Link to="/Cards">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </motion.button>
          </Link>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-700 mt-6"
        >
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">
            Sign Up
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;

