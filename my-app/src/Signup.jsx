// 
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-gray-900 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
        className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Create Account
        </h2>

        <form className="space-y-6">
          {[
            { label: "Full Name", type: "text", placeholder: "Enter your name" },
            { label: "Email", type: "email", placeholder: "Enter your email" },
            { label: "Password", type: "password", placeholder: "Create a password" },
          ].map((field, i) => (
            <motion.div
              key={i}
              initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <input
                type={field.type}
                placeholder=" "
                className="peer w-full border rounded-lg px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-700 peer-focus:text-sm">
                {field.label}
              </label>
            </motion.div>
          ))}

          <Link to="/Cards">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </motion.button>
          </Link>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-700 mt-6"
        >
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Signup;
