import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// ------------------ Card Component ------------------
const Card = ({ title, value }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
    whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
    className="backdrop-blur-xl bg-white/20 rounded-2xl shadow-xl p-6 text-center min-w-[150px]"
  >
    <h2 className="text-lg font-medium mb-2 text-white">{title}</h2>
    <p className="text-2xl font-bold text-yellow-300">{value}</p>
  </motion.div>
);

// ------------------ Booking Modal ------------------
const BookingModal = ({ onClose, onAdd }) => {
  const [booking, setBooking] = useState({
    date: "",
    type: "",
    driver: "",
    status: "Upcoming",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(booking);
    setBooking({ date: "", type: "", driver: "", status: "Upcoming" });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-blue-500 rounded-xl shadow-xl p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-black">Add Booking</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1 text-black">Date</label>
            <input
              type="date"
              value={booking.date}
              onChange={(e) => setBooking({ ...booking, date: e.target.value })}
              className="w-full p-2 rounded border"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-black">Ride Type</label>
            <input
              type="text"
              value={booking.type}
              onChange={(e) => setBooking({ ...booking, type: e.target.value })}
              className="w-full p-2 rounded border"
              placeholder="e.g., Sedan, SUV"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-black">Driver</label>
            <input
              type="text"
              value={booking.driver}
              onChange={(e) => setBooking({ ...booking, driver: e.target.value })}
              className="w-full p-2 rounded border"
              placeholder="Driver name"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-black">Status</label>
            <select
              value={booking.status}
              onChange={(e) => setBooking({ ...booking, status: e.target.value })}
              className="w-full p-2 rounded border"
            >
              <option>Upcoming</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black"
            >
              Add
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

// ------------------ Customer Dashboard ------------------
const CustomerDashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [bookings, setBookings] = useState([
    { date: "15 Nov 2025", type: "Sedan", driver: "Ravi", status: "Completed" },
    { date: "16 Nov 2025", type: "SUV", driver: "Amit", status: "Upcoming" },
    { date: "17 Nov 2025", type: "Mini", driver: "Ravi", status: "Upcoming" },
  ]);

  const menuItems = ["Dashboard", "My Bookings", "Profile"];

  const pageVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
      {/* TOP NAVBAR */}
      <nav className="bg-white/20 backdrop-blur-xl p-4 flex justify-between items-center shadow-lg rounded-b-xl">
        <h1 className="text-xl font-bold">NeuroFleetX Customer</h1>
        <div className="flex gap-3 items-center">
          <div className="hidden md:flex gap-3">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => setActivePage(item)}
                whileHover={{ scale: 1.05 }}
                className={`px-3 py-1 rounded-lg font-medium hover:bg-white/30 transition ${
                  activePage === item ? "bg-yellow-400 text-black shadow" : ""
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="px-3 py-1 bg-white/30 rounded hover:bg-white/50 transition text-black"
          >
            {sidebarOpen ? "⬅️" : "➡️"}
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        {sidebarOpen && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: 256 }}
            className="bg-white/20 backdrop-blur-xl shadow-lg p-6 flex flex-col hidden md:flex rounded-r-xl"
          >
            <h1 className="text-2xl font-bold mb-6">Customer Menu</h1>
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <motion.div
                  key={item}
                  onClick={() => setActivePage(item)}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-white/40 transition ${
                    activePage === item ? "bg-yellow-400 text-black font-semibold shadow" : ""
                  }`}
                >
                  {item}
                </motion.div>
              ))}
            </nav>
          </motion.aside>
        )}

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 flex justify-center items-start">
          <motion.div
            initial="offscreen"
            animate="onscreen"
            variants={pageVariants}
            className="w-full max-w-6xl space-y-8"
          >
            {activePage === "Dashboard" && (
              <CustomerHome bookings={bookings} onAddBooking={() => setIsModalOpen(true)} />
            )}
            {activePage === "My Bookings" && <MyBookings bookings={bookings} />}
            {activePage === "Profile" && <CustomerProfile />}
          </motion.div>
        </main>
      </div>

      {/* ADD BOOKING MODAL */}
      {isModalOpen && (
        <BookingModal
          onClose={() => setIsModalOpen(false)}
          onAdd={(b) => setBookings([...bookings, b])}
        />
      )}
    </div>
  );
};

// ------------------ Customer Home ------------------
const CustomerHome = ({ bookings, onAddBooking }) => {
  const rideData = [
    { month: "Nov", rides: 5 },
    { month: "Dec", rides: 3 },
    { month: "Jan", rides: 7 },
  ];

  return (
    <>
      <h1 className="text-3xl font-semibold mb-4 text-center">Hello, Alice 👋</h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={onAddBooking}
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300"
        >
          + Add Booking
        </button>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card title="Upcoming Rides" value={bookings.filter((b) => b.status === "Upcoming").length} />
          <Card title="Past Rides" value={bookings.filter((b) => b.status === "Completed").length} />
          <Card
            title="Total Spent"
            value={`₹${bookings.filter((b) => b.status === "Completed").length * 1500}`}
          />
        </div>
      </div>

      <div className="backdrop-blur-xl bg-white/20 shadow-xl rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Rides Over Last 3 Months</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={rideData}>
            <XAxis dataKey="month" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1e1e1e", color: "#fff" }}
              itemStyle={{ color: "#fff" }}
            />
            <Bar dataKey="rides" fill="#fbbf24" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

// ------------------ My Bookings ------------------
const MyBookings = ({ bookings }) => {
  const statusColors = {
    Completed: "bg-green-400",
    Upcoming: "bg-blue-400",
    Cancelled: "bg-red-400",
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 text-center">My Bookings</h1>
      <div className="overflow-x-auto backdrop-blur-xl bg-white/20 shadow-xl rounded-xl p-6">
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
                className="border-b border-white/20 hover:bg-white/10 transition"
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
const CustomerProfile = () => {
  const [profile, setProfile] = useState({
    name: "Alice",
    email: "alice@example.com",
    phone: "+91 9876543210",
  });

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 text-center">Profile</h1>
      <motion.div className="backdrop-blur-xl bg-white/20 shadow-xl rounded-xl p-6 space-y-4 max-w-md mx-auto">
        <div>
          <label className="block font-medium mb-1 text-white">Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="w-full p-2 rounded text-black"
          />
        </div>
        <div>
          <label className="block font-medium mb-1 text-white">Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="w-full p-2 rounded text-black"
          />
        </div>
        <div>
          <label className="block font-medium mb-1 text-white">Phone</label>
          <input
            type="text"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            className="w-full p-2 rounded text-black"
          />
        </div>
        <button
          onClick={() => alert("Profile saved!")}
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 w-full"
        >
          Save Changes
        </button>
      </motion.div>
    </div>
  );
};

export default CustomerDashboard;

