

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// /* ---------- AREA CHART DATA ---------- */
// const weeklyData = [
//   { name: "Monday", uv: 4000, pv: 2400, amt: 2400 },
//   { name: "Tuesday", uv: 3000, pv: 1398, amt: 2210 },
//   { name: "Wednesday", uv: 2000, pv: 9800, amt: 2290 },
//   { name: "Thursday", uv: 2780, pv: 3908, amt: 2000 },
//   { name: "Friday", uv: 1890, pv: 4800, amt: 2181 },
//   { name: "Saturday", uv: 2390, pv: 3800, amt: 2500 },
//   { name: "Sunday", uv: 3490, pv: 4300, amt: 2100 },
// ];

// /* ---------- MAIN COMPONENT ---------- */
// const Home = () => {
//   const [activePage, setActivePage] = useState("Dashboard");

//   const menuItems = [
//     "Dashboard",
//     "Users",
//     "Bookings",
//     "Revenue",
//     "Fleet",
//     "Analytics",
//     "Alerts",
//     "Settings",
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-gray-900">

//       {/* NAVBAR */}
//       <motion.nav
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="backdrop-blur-xl bg-white/20 text-white p-4 flex justify-between items-center shadow-lg"
//       >
//         <h1 className="text-2xl font-extrabold">
//           Neuro<span className="text-yellow-300">FleetX</span>
//         </h1>

//         <div className="flex gap-4">
//           {["Fleet", "Analytics", "Alerts"].map((item) => (
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               key={item}
//               onClick={() => setActivePage(item)}
//               className={`px-4 py-2 rounded-xl transition ${
//                 activePage === item
//                   ? "bg-yellow-400 text-black font-semibold"
//                   : "bg-white/30 hover:bg-yellow-200"
//               }`}
//             >
//               {item}
//             </motion.button>
//           ))}
//         </div>
//       </motion.nav>

//       <div className="flex flex-1">
        
//         {/* SIDEBAR */}
//         <motion.aside
//           initial={{ x: -80, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.7 }}
//           className="w-64 backdrop-blur-xl bg-white/20 p-6 shadow-xl text-white"
//         >
//           <h1 className="text-3xl font-bold mb-6">Menu</h1>

//           <nav className="flex flex-col gap-3">
//             {menuItems.map((item) => (
//               <motion.div
//                 key={item}
//                 whileHover={{ scale: 1.05, x: 10 }}
//                 onClick={() => setActivePage(item)}
//                 className={`p-3 rounded-xl cursor-pointer transition ${
//                   activePage === item
//                     ? "bg-yellow-300 text-black font-semibold"
//                     : "bg-white/10 hover:bg-white/20"
//                 }`}
//               >
//                 {item}
//               </motion.div>
//             ))}
//           </nav>
//         </motion.aside>

//         {/* MAIN CONTENT */}
//         <main className="flex-1 p-6">
//           <AnimatePresence mode="wait">
//             {activePage === "Dashboard" && (
//               <PageWrapper>
//                 <Dashboard />
//               </PageWrapper>
//             )}

//             {activePage === "Users" && (
//               <PageWrapper>
//                 <UsersPage />
//               </PageWrapper>
//             )}

//             {activePage === "Bookings" && (
//               <PageWrapper>
//                 <BookingsPage />
//               </PageWrapper>
//             )}

//             {activePage === "Revenue" && (
//               <PageWrapper>
//                 <RevenuePage />
//               </PageWrapper>
//             )}

//             {activePage === "Fleet" && (
//               <PageWrapper>
//                 <FleetPage />
//               </PageWrapper>
//             )}

//             {activePage === "Analytics" && (
//               <PageWrapper>
//                 <AnalyticsPage />
//               </PageWrapper>
//             )}

//             {activePage === "Alerts" && (
//               <PageWrapper>
//                 <AlertsPage />
//               </PageWrapper>
//             )}

//             {activePage === "Settings" && (
//               <PageWrapper>
//                 <SettingsPage />
//               </PageWrapper>
//             )}
//           </AnimatePresence>
//         </main>
//       </div>
//     </div>
//   );
// };

// /* ---------- ANIMATION WRAPPER ---------- */
// const PageWrapper = ({ children }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.4 }}
//   >
//     {children}
//   </motion.div>
// );

// /* ---------- DASHBOARD PAGE ---------- */
// const Dashboard = () => (
//   <>
//     <h1 className="text-4xl font-bold text-white mb-6">Hello, Admin 👋</h1>

//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//       <GlassCard title="Users" value="120" />
//       <GlassCard title="Bookings" value="50" />
//       <GlassCard title="Revenue" value="₹45,000" />
//     </div>

//     {/* ---- CHART SECTION ---- */}
//     <div className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg">
//       <h2 className="text-white text-xl font-semibold mb-4">Weekly Performance</h2>

//       <ResponsiveContainer width="100%" height={350}>
//         <AreaChart data={weeklyData}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#ffffff40" />
//           <XAxis dataKey="name" stroke="#fff" />
//           <YAxis stroke="#fff" />
//           <Tooltip />
//           <Area type="monotone" dataKey="uv" stackId="1" stroke="#00eaff" fill="#00eaff80" />
//           <Area type="monotone" dataKey="pv" stackId="1" stroke="#ff00f7" fill="#ff00f780" />
//           <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffe600" fill="#ffe60080" />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   </>
// );

// /* ---------- Glass Card ---------- */
// const GlassCard = ({ title, value }) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     className="backdrop-blur-xl bg-white/30 p-6 rounded-2xl shadow-lg"
//   >
//     <h2 className="text-lg font-semibold text-white">{title}</h2>
//     <p className="text-3xl font-extrabold text-yellow-300 mt-2">{value}</p>
//   </motion.div>
// );

// /* -----------------------------------------
//    USERS, BOOKINGS, REVENUE, FLEET, ANALYTICS,
//    ALERTS & SETTINGS PAGES (same as before)
// ----------------------------------------- */

// const UsersPage = () => {
//   const users = [
//     { name: "Alice", email: "alice@example.com", rides: 5 },
//     { name: "Bob", email: "bob@example.com", rides: 8 },
//     { name: "Charlie", email: "charlie@example.com", rides: 3 },
//   ];

//   return (
//     <>
//       <h1 className="text-3xl font-bold text-white mb-4">Users</h1>
//       <GlassTable headers={["Name", "Email", "Rides"]}>
//         {users.map((u) => (
//           <tr key={u.name} className="hover:bg-white/10 transition">
//             <td className="p-3">{u.name}</td>
//             <td className="p-3">{u.email}</td>
//             <td className="p-3">{u.rides}</td>
//           </tr>
//         ))}
//       </GlassTable>
//     </>
//   );
// };

// /* ---------- Glass Table ---------- */
// const GlassTable = ({ headers, children }) => (
//   <div className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg text-white">
//     <table className="w-full">
//       <thead>
//         <tr className="border-b border-white/30">
//           {headers.map((h) => (
//             <th key={h} className="p-3 text-left font-semibold">{h}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>{children}</tbody>
//     </table>
//   </div>
// );

// /* ---------- Other Pages (no change, cleaned) ---------- */
// const BookingsPage = () => {
//   const data = [
//     { user: "Alice", type: "Sedan", date: "15 Nov", amount: "₹500" },
//     { user: "Bob", type: "SUV", date: "14 Nov", amount: "₹800" },
//     { user: "Charlie", type: "Mini", date: "13 Nov", amount: "₹300" },
//   ];

//   return (
//     <>
//       <h1 className="text-3xl font-bold text-white mb-4">Bookings</h1>
//       <GlassTable headers={["User", "Type", "Date", "Amount"]}>
//         {data.map((b, i) => (
//           <tr key={i} className="hover:bg-white/10 transition">
//             <td className="p-3">{b.user}</td>
//             <td className="p-3">{b.type}</td>
//             <td className="p-3">{b.date}</td>
//             <td className="p-3">{b.amount}</td>
//           </tr>
//         ))}
//       </GlassTable>
//     </>
//   );
// };

// const RevenuePage = () => {
//   const revenue = [
//     { date: "10 Nov", amount: 12000 },
//     { date: "11 Nov", amount: 15000 },
//     { date: "12 Nov", amount: 18000 },
//   ];

//   return (
//     <>
//       <h1 className="text-3xl font-bold text-white mb-4">Revenue</h1>
//       <GlassTable headers={["Date", "Revenue"]}>
//         {revenue.map((r, i) => (
//           <tr key={i} className="hover:bg-white/10 transition">
//             <td className="p-3">{r.date}</td>
//             <td className="p-3">₹{r.amount}</td>
//           </tr>
//         ))}
//       </GlassTable>
//     </>
//   );
// };

// const FleetPage = () => {
//   const vehicles = [
//     { id: 1, model: "Toyota Innova", status: "Active", driver: "Ravi" },
//     { id: 2, model: "Honda City", status: "In Service", driver: "Amit" },
//     { id: 3, model: "Swift", status: "Inactive", driver: "Unassigned" },
//   ];

//   return (
//     <>
//       <h1 className="text-3xl font-bold text-white mb-4">Fleet Management</h1>

//       <GlassTable headers={["Model", "Status", "Driver"]}>
//         {vehicles.map((v) => (
//           <tr key={v.id} className="hover:bg-white/10">
//             <td className="p-3">{v.model}</td>
//             <td className="p-3">
//               <span
//                 className={`px-3 py-1 rounded-full text-black ${
//                   v.status === "Active"
//                     ? "bg-green-300"
//                     : v.status === "In Service"
//                     ? "bg-yellow-300"
//                     : "bg-red-300"
//                 }`}
//               >
//                 {v.status}
//               </span>
//             </td>
//             <td className="p-3">{v.driver}</td>
//           </tr>
//         ))}
//       </GlassTable>
//     </>
//   );
// };

// const AnalyticsPage = () => {
//   const stats = [
//     { title: "Total Rides", value: "1,240" },
//     { title: "Revenue", value: "₹2,45,000" },
//     { title: "Active Drivers", value: "42" },
//     { title: "Utilization", value: "78%" },
//   ];

//   return (
//     <>
//       <h1 className="text-3xl font-bold text-white mb-6">Analytics</h1>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {stats.map((s) => (
//           <GlassCard key={s.title} title={s.title} value={s.value} />
//         ))}
//       </div>
//     </>
//   );
// };

// const AlertsPage = () => {
//   const alerts = [
//     { type: "Critical", message: "Vehicle needs urgent service" },
//     { type: "Warning", message: "Driver has low acceptance rate" },
//     { type: "Info", message: "3 vehicles due for check" },
//   ];

//   const colors = {
//     Critical: "bg-red-500",
//     Warning: "bg-yellow-400",
//     Info: "bg-blue-400",
//   };

//   return (
//     <>
//       <h1 className="text-3xl font-bold text-white mb-6">Alerts</h1>

//       <div className="space-y-4">
//         {alerts.map((a, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.03 }}
//             className="flex items-center gap-4 p-4 backdrop-blur-xl bg-white/20 rounded-xl shadow"
//           >
//             <span className={`${colors[a.type]} text-black px-4 py-2 rounded-lg`}>
//               {a.type}
//             </span>
//             <p className="text-white">{a.message}</p>
//           </motion.div>
//         ))}
//       </div>
//     </>
//   );
// };

// const SettingsPage = () => (
//   <>
//     <h1 className="text-3xl font-bold text-white mb-6">Settings</h1>

//     <div className="backdrop-blur-xl bg-white/20 p-6 rounded-xl shadow space-y-4 text-white">
//       <div>
//         <label className="block mb-1">Admin Name</label>
//         <input
//           className="w-full bg-white/40 p-2 rounded text-black"
//           defaultValue="Admin"
//         />
//       </div>

//       <div>
//         <label className="block mb-1">Email</label>
//         <input
//           className="w-full bg-white/40 p-2 rounded text-black"
//           defaultValue="admin@example.com"
//         />
//       </div>

//       <button className="bg-yellow-400 px-4 py-2 rounded-lg text-black font-semibold">
//         Save Changes
//       </button>
//     </div>
//   </>
// );

// export default Home;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* ---------- DATA ---------- */
const weeklyData = [
  { name: "Monday", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Tuesday", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Wednesday", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Thursday", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Friday", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Saturday", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Sunday", uv: 3490, pv: 4300, amt: 2100 },
];

const pieData = [
  { name: "Sedan", value: 400 },
  { name: "SUV", value: 300 },
  { name: "Mini", value: 300 },
  { name: "Luxury", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;

/* ---------- CUSTOM PIE LABEL ---------- */
const renderCustomizedLabel = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) return null;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle || 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle || 0) * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${((percent || 1) * 100).toFixed(0)}%`}
    </text>
  );
};

/* ---------- MAIN COMPONENT ---------- */
const Home = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const menuItems = ["Dashboard","Users","Bookings","Revenue","Fleet","Analytics","Alerts","Settings"];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-gray-900">
  

      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-xl bg-white/20 text-white p-4 flex justify-between items-center shadow-lg"
      >
        <h1 className="text-2xl font-extrabold">
          Neuro<span className="text-yellow-300">FleetX</span>
        </h1>
        <div className="flex gap-4">
          {["Fleet", "Analytics", "Alerts"].map((item) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={item}
              onClick={() => setActivePage(item)}
              className={`px-4 py-2 rounded-xl transition ${
                activePage === item ? "bg-yellow-400 text-black font-semibold" : "bg-white/30 hover:bg-yellow-200"
              }`}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </motion.nav>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <motion.aside
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-64 backdrop-blur-xl bg-white/20 p-6 shadow-xl text-white"
        >
          <h1 className="text-3xl font-bold mb-6">Menu</h1>
          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05, x: 10 }}
                onClick={() => setActivePage(item)}
                className={`p-3 rounded-xl cursor-pointer transition ${
                  activePage === item ? "bg-yellow-300 text-black font-semibold" : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {item}
              </motion.div>
            ))}
          </nav>
        </motion.aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6">
          <AnimatePresence mode="wait">
            {activePage === "Dashboard" && <PageWrapper><Dashboard /></PageWrapper>}
            {activePage === "Users" && <PageWrapper><UsersPage /></PageWrapper>}
            {activePage === "Bookings" && <PageWrapper><BookingsPage /></PageWrapper>}
            {activePage === "Revenue" && <PageWrapper><RevenuePage /></PageWrapper>}
            {activePage === "Fleet" && <PageWrapper><FleetPage /></PageWrapper>}
            {activePage === "Analytics" && <PageWrapper><AnalyticsPage /></PageWrapper>}
            {activePage === "Alerts" && <PageWrapper><AlertsPage /></PageWrapper>}
            {activePage === "Settings" && <PageWrapper><SettingsPage /></PageWrapper>}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

/* ---------- ANIMATION WRAPPER ---------- */
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

/* ---------- GLASS CARD ---------- */
const GlassCard = ({ title, value }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="backdrop-blur-xl bg-white/30 p-6 rounded-2xl shadow-lg">
    <h2 className="text-lg font-semibold text-white">{title}</h2>
    <p className="text-3xl font-extrabold text-yellow-300 mt-2">{value}</p>
  </motion.div>
);

/* ---------- GLASS TABLE ---------- */
const GlassTable = ({ headers, children }) => (
  <div className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg text-white">
    <table className="w-full">
      <thead>
        <tr className="border-b border-white/30">
          {headers.map((h) => (<th key={h} className="p-3 text-left font-semibold">{h}</th>))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

/* ---------- PAGES ---------- */
const Dashboard = () => (
  <>
  {/* Admin Live Greeting Card */}
<motion.div 
  whileHover={{ scale: 1.02 }}
  className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg mb-8 text-white"
>
  <h2 className="text-2xl font-bold">Welcome Back, Admin 👋</h2>

  <p className="text-lg mt-2">
    Today: {new Date().toLocaleDateString()}
  </p>

  <p className="text-md opacity-90">
    Time: {new Date().toLocaleTimeString()}
  </p>

  <p className="text-yellow-300 mt-3 text-lg font-semibold">
    “Keep tracking. Keep improving. You're running the fleet of the future.”
  </p>
</motion.div>
{/* System Health Widget */}
<motion.div 
  whileHover={{ scale: 1.02 }}
  className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg mt-8 text-white"
>
  <h2 className="text-xl font-semibold mb-4">System Health</h2>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

    <div className="bg-white/20 p-4 rounded-xl">
      <p className="text-md">Server</p>
      <p className="font-bold text-green-300">Online</p>
    </div>

    <div className="bg-white/20 p-4 rounded-xl">
      <p className="text-md">API Latency</p>
      <p className="font-bold text-yellow-300">128ms</p>
    </div>

    <div className="bg-white/20 p-4 rounded-xl">
      <p className="text-md">Database</p>
      <p className="font-bold text-green-300">Connected</p>
    </div>

    <div className="bg-white/20 p-4 rounded-xl">
      <p className="text-md">Uptime</p>
      <p className="font-bold text-blue-300">99.99%</p>
    </div>

  </div>
</motion.div>

    <h1 className="text-4xl font-bold text-white mb-6">Hello, Admin 👋</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <GlassCard title="Users" value="120" />
      <GlassCard title="Bookings" value="50" />
      <GlassCard title="Revenue" value="₹45,000" />
    </div>
    <div className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg mb-10">
      <h2 className="text-white text-xl font-semibold mb-4">Weekly Performance</h2>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={weeklyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff40" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#00eaff" fill="#00eaff80" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#ff00f7" fill="#ff00f780" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffe600" fill="#ffe60080" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    <div className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg">
      <h2 className="text-white text-xl font-semibold mb-4">Vehicle Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={pieData} dataKey="value" labelLine={false} label={renderCustomizedLabel}>
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  </>
);

const UsersPage = () => {
  const allUsers = [
    { name: "Alice", email: "alice@example.com", rides: 5 },
    { name: "Bob", email: "bob@example.com", rides: 8 },
    { name: "Charlie", email: "charlie@example.com", rides: 3 },
    { name: "David", email: "david@example.com", rides: 12 },
    { name: "Emma", email: "emma@example.com", rides: 2 },
  ];

  const [search, setSearch] = useState("");
  const [minRides, setMinRides] = useState(0);

  const filteredUsers = allUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) &&
      u.rides >= minRides
  );

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Users</h1>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <GlassCard title="Total Users" value={allUsers.length} />
        <GlassCard title="Active Users" value="4" />
        <GlassCard title="Avg. Rides/User" value="6.5" />
      </div>

      {/* Search & Filters */}
      <div className="backdrop-blur-xl bg-white/20 p-4 rounded-xl mb-6 flex flex-col md:flex-row gap-4 text-white">
        
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white/40 p-2 rounded text-black w-full md:w-1/2"
        />

        <input
          type="number"
          placeholder="Min Rides"
          value={minRides}
          onChange={(e) => setMinRides(Number(e.target.value))}
          className="bg-white/40 p-2 rounded text-black w-full md:w-1/3"
        />
      </div>

      {/* User Table */}
      <GlassTable headers={["Name", "Email", "Rides"]}>
        {filteredUsers.map((u) => (
          <motion.tr
            key={u.name}
            whileHover={{ scale: 1.03 }}
            className="hover:bg-white/10 transition"
          >
            <td className="p-3">{u.name}</td>
            <td className="p-3">{u.email}</td>
            <td className="p-3">{u.rides}</td>
          </motion.tr>
        ))}
      </GlassTable>

      {/* Optional: Animated User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {filteredUsers.map((u) => (
          <motion.div
            key={u.name}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg text-white"
          >
            <h2 className="text-xl font-bold">{u.name}</h2>
            <p className="opacity-90">{u.email}</p>
            <p className="mt-2 text-yellow-300 font-semibold">{u.rides} Rides</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

const BookingsPage = () => {
  const allBookings = [
    { user: "Alice", type: "Sedan", date: "2025-11-15", amount: 500 },
    { user: "Bob", type: "SUV", date: "2025-11-14", amount: 800 },
    { user: "Charlie", type: "Mini", date: "2025-11-13", amount: 300 },
    { user: "David", type: "Luxury", date: "2025-11-12", amount: 1500 },
    { user: "Emma", type: "Sedan", date: "2025-11-11", amount: 600 },
  ];

  const [search, setSearch] = useState("");
  const [minAmount, setMinAmount] = useState(0);

  const filteredBookings = allBookings.filter(
    (b) =>
      (b.user.toLowerCase().includes(search.toLowerCase()) ||
       b.type.toLowerCase().includes(search.toLowerCase())) &&
      b.amount >= minAmount
  );

  const totalRevenue = filteredBookings.reduce((sum, b) => sum + b.amount, 0);

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Bookings</h1>

      {/* Search & Filter */}
      <div className="backdrop-blur-xl bg-white/20 p-4 rounded-xl mb-6 flex flex-col md:flex-row gap-4 text-white">
        <input
          type="text"
          placeholder="Search by user or type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white/40 p-2 rounded text-black w-full md:w-1/2"
        />
        <input
          type="number"
          placeholder="Min Amount"
          value={minAmount}
          onChange={(e) => setMinAmount(Number(e.target.value))}
          className="bg-white/40 p-2 rounded text-black w-full md:w-1/3"
        />
      </div>

      {/* Total Revenue */}
      <div className="mb-6">
        <GlassCard title="Total Revenue" value={`₹${totalRevenue}`} />
      </div>

      {/* Bookings Table */}
      <GlassTable headers={["User", "Type", "Date", "Amount"]}>
        {filteredBookings.map((b, i) => (
          <motion.tr
            key={i}
            whileHover={{ scale: 1.03 }}
            className={`transition ${
              b.amount >= 1000 ? "bg-yellow-300/20" : ""
            }`}
          >
            <td className="p-3">{b.user}</td>
            <td className="p-3">{b.type}</td>
            <td className="p-3">{new Date(b.date).toLocaleDateString()}</td>
            <td className="p-3">₹{b.amount}</td>
          </motion.tr>
        ))}
      </GlassTable>

      {/* Optional: Animated Booking Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {filteredBookings.map((b, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg text-white"
          >
            <h2 className="text-xl font-bold">{b.user}</h2>
            <p className="opacity-90">{b.type}</p>
            <p className="mt-1">{new Date(b.date).toLocaleDateString()}</p>
            <p className="mt-2 text-yellow-300 font-semibold">₹{b.amount}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
const RevenuePage = () => {
  const allRevenue = [
    { date: "2025-11-10", amount: 12000 },
    { date: "2025-11-11", amount: 15000 },
    { date: "2025-11-12", amount: 18000 },
    { date: "2025-11-13", amount: 20000 },
    { date: "2025-11-14", amount: 17000 },
  ];

  const [searchDate, setSearchDate] = useState("");

  const filteredRevenue = allRevenue.filter(r =>
    r.date.includes(searchDate)
  );

  const totalRevenue = filteredRevenue.reduce((sum, r) => sum + r.amount, 0);

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Revenue</h1>

      {/* Search */}
      <div className="backdrop-blur-xl bg-white/20 p-4 rounded-xl mb-6 text-white">
        <input
          type="text"
          placeholder="Search by date (YYYY-MM-DD)..."
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          className="bg-white/40 p-2 rounded text-black w-full md:w-1/3"
        />
      </div>

      {/* Total Revenue */}
      <div className="mb-6">
        <GlassCard title="Total Revenue" value={`₹${totalRevenue}`} />
      </div>

      {/* Revenue Table */}
      <GlassTable headers={["Date", "Revenue"]}>
        {filteredRevenue.map((r, i) => (
          <tr
            key={i}
            className={`hover:bg-white/10 transition ${
              r.amount >= 18000 ? "bg-green-300/20" : ""
            }`}
          >
            <td className="p-3">{r.date}</td>
            <td className="p-3">₹{r.amount}</td>
          </tr>
        ))}
      </GlassTable>

      {/* Revenue Chart */}
      <div className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg mt-8">
        <h2 className="text-white text-xl font-semibold mb-4">Revenue Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={filteredRevenue}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff40" />
            <XAxis dataKey="date" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Area type="monotone" dataKey="amount" stroke="#00eaff" fill="#00eaff50" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};


const FleetPage = () => {
  const vehiclesData = [
    { id: 1, model: "Toyota Innova", status: "Active", driver: "Ravi", lastService: "2025-11-01" },
    { id: 2, model: "Honda City", status: "In Service", driver: "Amit", lastService: "2025-10-20" },
    { id: 3, model: "Swift", status: "Inactive", driver: "Unassigned", lastService: "2025-09-15" },
    { id: 4, model: "Hyundai i20", status: "Active", driver: "Sita", lastService: "2025-11-05" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredVehicles = vehiclesData.filter(
    v =>
      v.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.driver.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalVehicles = vehiclesData.length;
  const activeVehicles = vehiclesData.filter(v => v.status === "Active").length;

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-4">Fleet Management</h1>

      {/* Search & Summary */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by model or driver..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-white/40 p-2 rounded text-black w-full md:w-1/3"
        />

        <div className="flex gap-4">
          <GlassCard title="Total Vehicles" value={totalVehicles} />
          <GlassCard title="Active Vehicles" value={activeVehicles} />
        </div>
      </div>

      {/* Vehicle Table */}
      <GlassTable headers={["Model","Status","Driver","Last Service"]}>
        {filteredVehicles.map(v => (
          <tr
            key={v.id}
            className={`hover:bg-white/10 transition ${
              v.status === "Inactive" ? "bg-red-300/20" : v.status === "In Service" ? "bg-yellow-300/20" : ""
            }`}
          >
            <td className="p-3">{v.model}</td>
            <td className="p-3">
              <span className={`px-3 py-1 rounded-full text-black ${
                v.status === "Active" ? "bg-green-300" : v.status === "In Service" ? "bg-yellow-300" : "bg-red-300"
              }`}>
                {v.status}
              </span>
            </td>
            <td className="p-3">{v.driver}</td>
            <td className="p-3">{v.lastService}</td>
          </tr>
        ))}
      </GlassTable>
    </>
  );
};



const AnalyticsPage = () => {
  const stats = [
    { title: "Total Rides", value: "1,240" },
    { title: "Revenue", value: "₹2,45,000" },
    { title: "Active Drivers", value: "42" },
    { title: "Utilization", value: "78%" },
  ];

  const weeklyRides = [
    { day: "Mon", rides: 120 },
    { day: "Tue", rides: 180 },
    { day: "Wed", rides: 200 },
    { day: "Thu", rides: 150 },
    { day: "Fri", rides: 220 },
    { day: "Sat", rides: 170 },
    { day: "Sun", rides: 190 },
  ];

  const rideTypes = [
    { name: "Sedan", value: 400 },
    { name: "SUV", value: 300 },
    { name: "Mini", value: 300 },
    { name: "Luxury", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Analytics</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map(s => <GlassCard key={s.title} title={s.title} value={s.value} />)}
      </div>

      {/* Weekly Rides Chart */}
      <div className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg mb-8 text-white">
        <h2 className="text-xl font-semibold mb-4">Weekly Rides Trend</h2>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={weeklyRides}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff40" />
            <XAxis dataKey="day" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Area type="monotone" dataKey="rides" stroke="#00eaff" fill="#00eaff80" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Ride Type Distribution */}
      <div className="backdrop-blur-xl bg-white/20 p-6 rounded-2xl shadow-lg text-white">
        <h2 className="text-xl font-semibold mb-4">Ride Type Distribution</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={rideTypes} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
              {rideTypes.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

const AlertsPage = () => {
  const alerts = [
    { type: "Critical", message: "Vehicle needs urgent service" },
    { type: "Warning", message: "Driver has low acceptance rate" },
    { type: "Info", message: "3 vehicles due for check" },
  ];
  const colors = { Critical:"bg-red-500", Warning:"bg-yellow-400", Info:"bg-blue-400" };
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Alerts</h1>
      <div className="space-y-4">
        {alerts.map((a,i) => (
          <motion.div key={i} whileHover={{ scale:1.03 }} className="flex items-center gap-4 p-4 backdrop-blur-xl bg-white/20 rounded-xl shadow">
            <span className={`${colors[a.type]} text-black px-4 py-2 rounded-lg`}>{a.type}</span>
            <p className="text-white">{a.message}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

const SettingsPage = () => {
  const [adminName, setAdminName] = useState("Admin");
  const [email, setEmail] = useState("admin@example.com");
  const [message, setMessage] = useState("");
  const [theme, setTheme] = useState("light"); // light or dark

  const handleSave = () => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email.");
      return;
    }
    setMessage("Settings saved successfully ✅");
    // Here you can also call API to save settings
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Settings</h1>
      <div className="backdrop-blur-xl bg-white/20 p-6 rounded-xl shadow space-y-4 text-white">
        <div>
          <label className="block mb-1">Admin Name</label>
          <input
            className="w-full bg-white/40 p-2 rounded text-black"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            className="w-full bg-white/40 p-2 rounded text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleSave}
            className="bg-yellow-400 px-4 py-2 rounded-lg text-black font-semibold"
          >
            Save Changes
          </button>
          <button
            onClick={toggleTheme}
            className="bg-gray-400 px-4 py-2 rounded-lg text-black font-semibold"
          >
            Toggle {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
        {message && <p className="text-green-300 mt-2">{message}</p>}
      </div>
    </>
  );
};











export default Home;
