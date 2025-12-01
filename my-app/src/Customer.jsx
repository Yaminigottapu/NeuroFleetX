
// export default CustomerDashboard;
import React, { useState } from "react";
import { motion } from "framer-motion";

// ------------------ Card Component ------------------
const Card = ({ title, value }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
    whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
    className="bg-white rounded-2xl shadow-xl p-6 text-center min-w-[150px]"
  >
    <h2 className="text-lg font-medium mb-2">{title}</h2>
    <p className="text-2xl font-bold">{value}</p>
  </motion.div>
);

// ------------------ Customer Dashboard ------------------
const CustomerDashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const menuItems = ["Dashboard", "My Bookings", "Profile"];

  const pageVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-gray-900">
      {/* TOP NAVBAR */}
      <nav className="bg-white/20 backdrop-blur-md text-gray-900 p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-bold">NeuroFleetX Customer</h1>
        <div className="hidden md:flex gap-3">
          {menuItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => setActivePage(item)}
              whileHover={{ scale: 1.05 }}
              className={`px-3 py-1 rounded-lg font-medium hover:bg-white/30 transition ${
                activePage === item ? "bg-white/50 shadow" : ""
              }`}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </nav>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-64 bg-white/30 backdrop-blur-md shadow-lg p-6 flex flex-col hidden md:flex">
          <h1 className="text-2xl font-bold mb-6">Customer Menu</h1>
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <motion.div
                key={item}
                onClick={() => setActivePage(item)}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-white/40 transition ${
                  activePage === item ? "bg-white/50 font-semibold shadow" : ""
                }`}
              >
                {item}
              </motion.div>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 flex justify-center items-start">
          <motion.div
            initial="offscreen"
            animate="onscreen"
            variants={pageVariants}
            className="w-full max-w-6xl space-y-8"
          >
            {activePage === "Dashboard" && <CustomerHome />}
            {activePage === "My Bookings" && <MyBookings />}
            {activePage === "Profile" && <CustomerProfile />}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

// ------------------ Customer Home ------------------
const CustomerHome = () => (
  <>
    <h1 className="text-3xl font-semibold mb-4 text-center">Hello, Customer 👋</h1>
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Upcoming Rides" value="3" />
        <Card title="Past Rides" value="10" />
        <Card title="Total Spent" value="₹12,500" />
      </div>
    </div>
  </>
);

// ------------------ My Bookings ------------------
const MyBookings = () => {
  const bookings = [
    { date: "15 Nov 2025", type: "Sedan", driver: "Ravi", status: "Completed" },
    { date: "16 Nov 2025", type: "SUV", driver: "Amit", status: "Upcoming" },
    { date: "17 Nov 2025", type: "Mini", driver: "Ravi", status: "Upcoming" },
  ];

  const statusColors = {
    Completed: "bg-green-600",
    Upcoming: "bg-blue-600",
    Cancelled: "bg-red-600",
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 text-center">My Bookings</h1>
      <div className="overflow-x-auto bg-white/30 backdrop-blur-md shadow rounded-xl p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/40">
              <th className="p-2">Date</th>
              <th className="p-2">Ride Type</th>
              <th className="p-2">Driver</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-white/20 hover:bg-white/20 transition"
              >
                <td className="p-2">{b.date}</td>
                <td className="p-2">{b.type}</td>
                <td className="p-2">{b.driver}</td>
                <td className="p-2">
                  <span className={`text-white px-3 py-1 rounded-full ${statusColors[b.status]}`}>
                    {b.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ------------------ Customer Profile ------------------
const CustomerProfile = () => (
  <div>
    <h1 className="text-3xl font-semibold mb-6 text-center">Profile</h1>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/30 backdrop-blur-md shadow rounded-xl p-6 space-y-4 max-w-md mx-auto"
    >
      <div>
        <label className="block font-medium mb-1">Name</label>
        <input type="text" defaultValue="Alice" className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block font-medium mb-1">Email</label>
        <input type="email" defaultValue="alice@example.com" className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block font-medium mb-1">Phone</label>
        <input type="text" defaultValue="+91 9876543210" className="w-full border rounded px-3 py-2" />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
        Save Changes
      </button>
    </motion.div>
  </div>
);

export default CustomerDashboard;
