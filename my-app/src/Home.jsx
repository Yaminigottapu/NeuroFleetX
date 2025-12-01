

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
      {/* NAVBAR */}
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
  const users = [
    { name: "Alice", email: "alice@example.com", rides: 5 },
    { name: "Bob", email: "bob@example.com", rides: 8 },
    { name: "Charlie", email: "charlie@example.com", rides: 3 },
  ];
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-4">Users</h1>
      <GlassTable headers={["Name","Email","Rides"]}>
        {users.map(u => (
          <tr key={u.name} className="hover:bg-white/10 transition">
            <td className="p-3">{u.name}</td>
            <td className="p-3">{u.email}</td>
            <td className="p-3">{u.rides}</td>
          </tr>
        ))}
      </GlassTable>
    </>
  );
};

const BookingsPage = () => {
  const data = [
    { user: "Alice", type: "Sedan", date: "15 Nov", amount: "₹500" },
    { user: "Bob", type: "SUV", date: "14 Nov", amount: "₹800" },
    { user: "Charlie", type: "Mini", date: "13 Nov", amount: "₹300" },
  ];
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-4">Bookings</h1>
      <GlassTable headers={["User","Type","Date","Amount"]}>
        {data.map((b,i) => (
          <tr key={i} className="hover:bg-white/10 transition">
            <td className="p-3">{b.user}</td>
            <td className="p-3">{b.type}</td>
            <td className="p-3">{b.date}</td>
            <td className="p-3">{b.amount}</td>
          </tr>
        ))}
      </GlassTable>
    </>
  );
};

const RevenuePage = () => {
  const revenue = [
    { date: "10 Nov", amount: 12000 },
    { date: "11 Nov", amount: 15000 },
    { date: "12 Nov", amount: 18000 },
  ];
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-4">Revenue</h1>
      <GlassTable headers={["Date","Revenue"]}>
        {revenue.map((r,i) => (
          <tr key={i} className="hover:bg-white/10 transition">
            <td className="p-3">{r.date}</td>
            <td className="p-3">₹{r.amount}</td>
          </tr>
        ))}
      </GlassTable>
    </>
  );
};

const FleetPage = () => {
  const vehicles = [
    { id: 1, model: "Toyota Innova", status: "Active", driver: "Ravi" },
    { id: 2, model: "Honda City", status: "In Service", driver: "Amit" },
    { id: 3, model: "Swift", status: "Inactive", driver: "Unassigned" },
  ];
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-4">Fleet Management</h1>
      <GlassTable headers={["Model","Status","Driver"]}>
        {vehicles.map(v => (
          <tr key={v.id} className="hover:bg-white/10">
            <td className="p-3">{v.model}</td>
            <td className="p-3">
              <span className={`px-3 py-1 rounded-full text-black ${
                v.status==="Active" ? "bg-green-300" : v.status==="In Service" ? "bg-yellow-300" : "bg-red-300"
              }`}>{v.status}</span>
            </td>
            <td className="p-3">{v.driver}</td>
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
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map(s => <GlassCard key={s.title} title={s.title} value={s.value} />)}
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

const SettingsPage = () => (
  <>
    <h1 className="text-3xl font-bold text-white mb-6">Settings</h1>
    <div className="backdrop-blur-xl bg-white/20 p-6 rounded-xl shadow space-y-4 text-white">
      <div>
        <label className="block mb-1">Admin Name</label>
        <input className="w-full bg-white/40 p-2 rounded text-black" defaultValue="Admin" />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input className="w-full bg-white/40 p-2 rounded text-black" defaultValue="admin@example.com" />
      </div>
      <button className="bg-yellow-400 px-4 py-2 rounded-lg text-black font-semibold">Save Changes</button>
    </div>
  </>
);

export default Home;
