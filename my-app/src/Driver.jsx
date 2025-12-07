
// import React, { useState } from "react";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// const DriverDashboard = () => {
//   const [activePage, setActivePage] = useState("Dashboard");

//   const [rides, setRides] = useState([
//     { user: "Alice", type: "Sedan", date: "15 Nov 2025", status: "Upcoming", location: { lat: 19.075, lng: 72.8777 } },
//     { user: "Bob", type: "SUV", date: "16 Nov 2025", status: "Accepted", location: { lat: 28.7041, lng: 77.1025 } },
//     { user: "Charlie", type: "Mini", date: "17 Nov 2025", status: "Upcoming", location: { lat: 12.9716, lng: 77.5946 } },
//   ]);

//   const [stats, setStats] = useState({
//     assigned: 3,
//     completed: 0,
//     earnings: 0,
//   });

//   const handleRideAction = (index, action) => {
//     setRides((prev) => {
//       const newRides = [...prev];
//       if (action === "accept") newRides[index].status = "Accepted";
//       else if (action === "complete") {
//         newRides[index].status = "Completed";
//         setStats((s) => ({
//           ...s,
//           completed: s.completed + 1,
//           earnings: s.earnings + 1000,
//         }));
//       }
//       return newRides;
//     });
//   };

//   const menuItems = ["Dashboard", "My Rides", "Earnings", "Profile"];

//   return (
// <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-gray-900">
//       {/* TOP NAVBAR */}
//       <nav className="bg-blue-00 bg-opacity-20 backdrop-blur-md text-white p-4 flex justify-between items-center shadow-lg rounded-b-xl">
//         <h1 className="text-xl font-bold">NeuroFleetX Driver</h1>
//         <div>
//           {menuItems.slice(0, 3).map((item) => (
//             <button
//               key={item}
//               className="px-3 py-1 hover:bg-purple-700 rounded transition text-white"
//               onClick={() => setActivePage(item)}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </nav>

//       <div className="flex flex-1">
//         {/* SIDEBAR */}
//         <aside className="w-64 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg p-6 flex flex-col rounded-r-xl">
//           <h1 className="text-2xl font-bold mb-6">Driver Menu</h1>
//           <nav className="flex flex-col gap-4">
//             {menuItems.map((item) => (
//               <div
//                 key={item}
//                 onClick={() => setActivePage(item)}
//                 className={`flex items-center gap-2 p-2 rounded cursor-pointer transition hover:bg-purple-600 ${
//                   activePage === item ? "bg-pink-700 font-semibold" : ""
//                 }`}
//               >
//                 {item}
//               </div>
//             ))}
//           </nav>
//         </aside>

//         {/* MAIN CONTENT */}
//         <main className="flex-1 p-6 space-y-6">
//           {activePage === "Dashboard" && <DriverHome stats={stats} rides={rides} />}
//           {activePage === "My Rides" && <MyRides rides={rides} handleRideAction={handleRideAction} />}
//           {activePage === "Earnings" && <Earnings stats={stats} />}
//           {activePage === "Profile" && <Profile />}
//         </main>
//       </div>
//     </div>
//   );
// };

// // ------------------ Driver Home ------------------
// const DriverHome = ({ stats, rides }) => {
//   const rideStatusCount = rides.reduce(
//     (acc, ride) => {
//       acc[ride.status] = (acc[ride.status] || 0) + 1;
//       return acc;
//     },
//     { Upcoming: 0, Accepted: 0, Completed: 0 }
//   );

//   const pieData = [
//     { name: "Completed", value: rideStatusCount.Completed || 0, color: "#22c55e" },
//     { name: "Accepted", value: rideStatusCount.Accepted || 0, color: "#facc15" },
//     { name: "Upcoming", value: rideStatusCount.Upcoming || 0, color: "#3b82f6" },
//   ];

//   const earningsData = [
//     { date: "10 Nov", earnings: 1200 },
//     { date: "11 Nov", earnings: 1500 },
//     { date: "12 Nov", earnings: 1800 },
//     { date: "13 Nov", earnings: 1300 },
//   ];

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
//   });

//   const mapContainerStyle = { width: "100%", height: "300px" };
//   const center = rides[0]?.location || { lat: 19.075, lng: 72.8777 };

//   return (
//     <>
//       <h1 className="text-3xl font-semibold mb-4 text-white">Hello, Driver 👋</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <Card title="Assigned Rides" value={stats.assigned} color="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" />
//         <Card title="Completed Rides" value={stats.completed} color="bg-gradient-to-br from-green-400 via-green-500 to-green-600" />
//         <Card title="Earnings" value={`₹${stats.earnings}`} color="bg-gradient-to-br from-purple-500 via-pink-500 to-pink-600" />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {/* Earnings Chart */}
//         <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white shadow rounded-xl p-4">
//           <h2 className="text-xl font-semibold mb-2">Earnings Over Days</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={earningsData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
//               <XAxis dataKey="date" stroke="#fff" />
//               <YAxis stroke="#fff" />
//               <Tooltip contentStyle={{ backgroundColor: '#1e1e1e', color: '#fff' }} />
//               <Legend />
//               <Line type="monotone" dataKey="earnings" stroke="#fbbf24" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Rides Status Pie Chart */}
//         <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white shadow rounded-xl p-4">
//           <h2 className="text-xl font-semibold mb-2">Rides Status</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
//                 {pieData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip contentStyle={{ backgroundColor: '#1e1e1e', color: '#fff' }} />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Active Ride Map */}
//     {/* Active Rides Summary */}
// <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white shadow rounded-xl p-6">
//   <h2 className="text-xl font-semibold mb-3">Active Rides Summary</h2>

//   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//     <div className="bg-white/20 p-4 rounded-lg text-center">
//       <p className="text-lg font-medium">Accepted</p>
//       <p className="text-3xl font-bold">{rideStatusCount.Accepted}</p>
//     </div>

//     <div className="bg-white/20 p-4 rounded-lg text-center">
//       <p className="text-lg font-medium">Upcoming</p>
//       <p className="text-3xl font-bold">{rideStatusCount.Upcoming}</p>
//     </div>

//     <div className="bg-white/20 p-4 rounded-lg text-center">
//       <p className="text-lg font-medium">Completed</p>
//       <p className="text-3xl font-bold">{rideStatusCount.Completed}</p>
//     </div>
//   </div>

//   <div className="mt-4 bg-white/20 p-4 rounded-lg">
//     <p className="text-lg font-semibold">Current Active Status</p>

//     {rideStatusCount.Accepted > 0 ? (
//       <p className="text-green-300 mt-1">✔ You have an active ride in progress.</p>
//     ) : (
//       <p className="text-yellow-200 mt-1">⏳ No active rides at the moment.</p>
//     )}
//   </div>
// </div>

//     </>
//   );
// };

// // ------------------ Card Component ------------------
// const Card = ({ title, value, color }) => (
//   <div className={`${color} text-white shadow rounded-xl p-6`}>
//     <h2 className="text-lg font-medium">{title}</h2>
//     <p className="text-2xl font-bold mt-2">{value}</p>
//   </div>
// );

// // ------------------ My Rides ------------------
// const MyRides = ({ rides, handleRideAction }) => {
//   const statusColors = {
//     Completed: "bg-green-500",
//     Upcoming: "bg-blue-500",
//     Accepted: "bg-yellow-500",
//     Cancelled: "bg-red-500",
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-semibold mb-6 text-white">My Rides</h1>
//       <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white shadow rounded-xl p-6">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="border-b border-gray-300">
//               <th className="p-2">User</th>
//               <th className="p-2">Ride Type</th>
//               <th className="p-2">Date</th>
//               <th className="p-2">Status</th>
//               <th className="p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rides.map((ride, i) => (
//               <tr key={i} className="border-b border-gray-300 hover:bg-gray-800 transition">
//                 <td className="p-2">{ride.user}</td>
//                 <td className="p-2">{ride.type}</td>
//                 <td className="p-2">{ride.date}</td>
//                 <td className="p-2">
//                   <span className={`text-white px-3 py-1 rounded-full ${statusColors[ride.status]}`}>
//                     {ride.status}
//                   </span>
//                 </td>
//                 <td className="p-2">
//                   {ride.status === "Upcoming" && (
//                     <button
//                       onClick={() => handleRideAction(i, "accept")}
//                       className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
//                     >
//                       Accept
//                     </button>
//                   )}
//                   {ride.status === "Accepted" && (
//                     <button
//                       onClick={() => handleRideAction(i, "complete")}
//                       className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
//                     >
//                       Complete
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// // ------------------ Earnings ------------------
// const Earnings = ({ stats }) => (
//   <div>
//     <h1 className="text-3xl font-semibold mb-6 text-white">Earnings</h1>
//     <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white shadow rounded-xl p-6">
//       <p className="text-xl font-semibold">Total Earnings: ₹{stats.earnings}</p>
//     </div>
//   </div>
// );

// // ------------------ Profile ------------------
// const Profile = () => (
//   <div>
//     <h1 className="text-3xl font-semibold mb-6 text-white">Profile</h1>
//     <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white shadow rounded-xl p-6 space-y-4">
//       <div>
//         <label className="block font-medium mb-1">Driver Name</label>
//         <input type="text" defaultValue="Ravi Kumar" className="w-full border rounded px-3 py-2 text-gray-900" />
//       </div>
//       <div>
//         <label className="block font-medium mb-1">Email</label>
//         <input type="email" defaultValue="ravi@example.com" className="w-full border rounded px-3 py-2 text-gray-900" />
//       </div>
//       <div>
//         <label className="block font-medium mb-1">Phone</label>
//         <input type="text" defaultValue="+91 9876543210" className="w-full border rounded px-3 py-2 text-gray-900" />
//       </div>
//       <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
//         Save Changes
//       </button>
//     </div>
//   </div>
// );

// export default DriverDashboard;
import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const DriverDashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const [rides, setRides] = useState([
  { user: "Alice", type: "Sedan", date: "15 Nov 2025", status: "Upcoming", location: { lat: 19.075, lng: 72.8777 } },
    { user: "Bob", type: "SUV", date: "16 Nov 2025", status: "Accepted", location: { lat: 28.7041, lng: 77.1025 } },
    { user: "Charlie", type: "Mini", date: "17 Nov 2025", status: "Upcoming", location: { lat: 12.9716, lng: 77.5946 } },
  ]);

  const [stats, setStats] = useState({ assigned: 3, completed: 0, earnings: 0 });
  const menuItems = ["Dashboard", "My Rides", "Earnings", "Profile"];

  const handleRideAction = (index, action) => {
    setRides((prev) => {
      const newRides = [...prev];
      if (action === "accept") newRides[index].status = "Accepted";
      else if (action === "complete") {
        newRides[index].status = "Completed";
        setStats((s) => ({ ...s, completed: s.completed + 1, earnings: s.earnings + 1000 }));
      }
      return newRides;
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
      {/* TOP NAVBAR */}
      <nav className="backdrop-blur-xl bg-white/20 p-4 flex justify-between items-center shadow-lg rounded-b-xl">
        <h1 className="text-xl font-bold text-white">NeuroFleetX Driver</h1>
        <div className="flex gap-2">
          {menuItems.slice(0, 3).map((item) => (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`px-3 py-1 rounded transition ${
                activePage === item ? "bg-yellow-400 text-black font-semibold" : "bg-white/20 hover:bg-yellow-200 text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-64 backdrop-blur-xl bg-white/20 p-6 shadow-xl text-white flex flex-col rounded-r-xl">
          <h1 className="text-2xl font-bold mb-6">Driver Menu</h1>
          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <div
                key={item}
                onClick={() => setActivePage(item)}
                className={`p-3 rounded-xl cursor-pointer transition ${
                  activePage === item ? "bg-yellow-400 text-black font-semibold" : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 space-y-6">
          {activePage === "Dashboard" && <DriverHome stats={stats} rides={rides} />}
          {activePage === "My Rides" && <MyRides rides={rides} handleRideAction={handleRideAction} />}
          {activePage === "Earnings" && <Earnings stats={stats} />}
          {activePage === "Profile" && <Profile />}
        </main>
      </div>
    </div>
  );
};

// ------------------ Driver Home ------------------
const DriverHome = ({ stats, rides }) => {
  const rideStatusCount = rides.reduce(
    (acc, ride) => {
      acc[ride.status] = (acc[ride.status] || 0) + 1;
      return acc;
    },
    { Upcoming: 0, Accepted: 0, Completed: 0 }
  );

  const pieData = [
    { name: "Completed", value: rideStatusCount.Completed || 0, color: "#22c55e" },
    { name: "Accepted", value: rideStatusCount.Accepted || 0, color: "#facc15" },
    { name: "Upcoming", value: rideStatusCount.Upcoming || 0, color: "#3b82f6" },
  ];

  const earningsData = [
    { date: "10 Nov", earnings: 1200 },
    { date: "11 Nov", earnings: 1500 },
    { date: "12 Nov", earnings: 1800 },
    { date: "13 Nov", earnings: 1300 },
  ];

  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Hello, Driver 👋</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <GlassCard title="Assigned Rides" value={stats.assigned} />
        <GlassCard title="Completed Rides" value={stats.completed} />
        <GlassCard title="Earnings" value={`₹${stats.earnings}`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg text-white">
          <h2 className="text-xl font-semibold mb-4">Earnings Over Days</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff40" />
              <XAxis dataKey="date" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="earnings" stroke="#ffe600" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg text-white">
          <h2 className="text-xl font-semibold mb-4">Rides Status</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Active Ride Summary */}
      <div className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg text-white">
        <h2 className="text-xl font-semibold mb-4">Active Rides Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="backdrop-blur-xl bg-white/10 p-4 rounded-xl text-center">
            <p>Accepted</p>
            <p className="text-3xl font-bold">{rideStatusCount.Accepted}</p>
          </div>
          <div className="backdrop-blur-xl bg-white/10 p-4 rounded-xl text-center">
            <p>Upcoming</p>
            <p className="text-3xl font-bold">{rideStatusCount.Upcoming}</p>
          </div>
          <div className="backdrop-blur-xl bg-white/10 p-4 rounded-xl text-center">
            <p>Completed</p>
            <p className="text-3xl font-bold">{rideStatusCount.Completed}</p>
          </div>
        </div>
      </div>
    </>
  );
};

// ------------------ Glass Card ------------------
const GlassCard = ({ title, value }) => (
  <div className="backdrop-blur-xl bg-white/30 p-6 rounded-2xl shadow-lg text-white">
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-3xl font-extrabold text-yellow-300 mt-2">{value}</p>
  </div>
);

// ------------------ My Rides ------------------
const MyRides = ({ rides, handleRideAction }) => {
  const statusColors = {
    Completed: "bg-green-300",
    Upcoming: "bg-blue-300",
    Accepted: "bg-yellow-300",
    Cancelled: "bg-red-300",
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">My Rides</h1>
      <div className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg text-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/30">
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Ride Type</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {rides.map((ride, i) => (
              <tr key={i} className="hover:bg-white/10 transition">
                <td className="p-3">{ride.user}</td>
                  <td className="p-3">{ride.type}</td>
                <td className="p-3">{ride.date}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full ${statusColors[ride.status]}`}>{ride.status}</span>
                </td>
                <td className="p-3">
                  {ride.status === "Upcoming" && (
                    <button
                      onClick={() => handleRideAction(i, "accept")}
                      className="bg-yellow-300 text-black px-3 py-1 rounded hover:bg-yellow-400 transition"
                    >
                      Accept
                    </button>
                  )}
                  {ride.status === "Accepted" && (
                    <button
                      onClick={() => handleRideAction(i, "complete")}
                      className="bg-green-300 text-black px-3 py-1 rounded hover:bg-green-400 transition"
                    >
                      Complete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ------------------ Earnings ------------------
const Earnings = ({ stats }) => (
  <div>
    <h1 className="text-3xl font-semibold mb-6">Earnings</h1>
    <div className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg text-white">
      <p className="text-xl font-semibold">Total Earnings: ₹{stats.earnings}</p>
    </div>
  </div>
);

// ------------------ Profile ------------------
const Profile = () => (
  <div>
    <h1 className="text-3xl font-semibold mb-6">Profile</h1>
    <div className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg text-white space-y-4">
      <div>
        <label className="block mb-1">Driver Name</label>
        <input type="text" defaultValue="Ravi Kumar" className="w-full p-2 rounded text-black" />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input type="email" defaultValue="ravi@example.com" className="w-full p-2 rounded text-black" />
      </div>
      <div>
        <label className="block mb-1">Phone</label>
        <input type="text" defaultValue="+91 9876543210" className="w-full p-2 rounded text-black" />
      </div>
      <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition">Save Changes</button>
    </div>
  </div>
);

export default DriverDashboard;
