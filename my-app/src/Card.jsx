// import {Link} from 'react-router-dom'

// const RoleCards = () => {
//   const roles = [
//     {
//       title: "Admin",
//       description: "Manage users, bookings, vehicles, and revenue.",
//       color: "bg-blue-600",
//       link: "/Home"
//     },
//     {
//       title: "Driver",
//       description: "Handle rides, update ride status, and view earnings.",
//       color: "bg-green-600",
//       link: "/driver"
//     },
//     {
//       title: "Customer",
//       description: "Book rides, track trips, and manage payments.",
//       color: "bg-yellow-600",
// link: "/customer"
//     }
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
//       {roles.map((role, index) => (
//         <Link
//         to={role.link}
//           key={index}
//           className={`${role.color} text-white rounded-xl shadow-lg p-6 hover:scale-[1.03] transition-transform`}
//         >
//           <h2 className="text-2xl font-bold mb-2">{role.title}</h2>
//           <p className="text-sm opacity-90">{role.description}</p>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default RoleCards;
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RoleCards = () => {
  const roles = [
    {
      title: "Admin",
      description: "Manage users, bookings, vehicles, and revenue.",
      gradient: "bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-500",
      link: "/Home"
    },
    {
      title: "Driver",
      description: "Handle rides, update ride status, and view earnings.",
      gradient: "bg-gradient-to-br from-yellow-400 via-yellow-400 to-yellow-600",
      link: "/driver"
    },
    {
      title: "Customer",
      description: "Book rides, track trips, and manage payments.",
      gradient: "bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600",
      link: "/customer"
    }
  ];

  // Animation variants for cards
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", bounce: 0.3, duration: 0.8 } 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 w-full max-w-6xl">
        {roles.map((role, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={role.link}
              className={`${role.gradient} text-white rounded-2xl shadow-xl p-8 flex flex-col justify-between h-full relative overflow-hidden`}
            >
              {/* Glowing overlay effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 hover:opacity-50 transition-opacity rounded-2xl pointer-events-none"></div>

              <h2 className="text-2xl font-bold mb-3 relative z-10">{role.title}</h2>
              <p className="text-sm opacity-90 relative z-10">{role.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RoleCards;
