  import React, { useState } from "react";

const DriverDashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const menuItems = [
    "Dashboard",
    "My Rides",
    "Earnings",
    "Profile"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* TOP NAVBAR */}
      <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">NeuroFleetX Driver</h1>
        <div>
          <button className="px-3" onClick={() => setActivePage("Dashboard")}>Dashboard</button>
          <button className="px-3" onClick={() => setActivePage("My Rides")}>My Rides</button>
          <button className="px-3" onClick={() => setActivePage("Earnings")}>Earnings</button>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
          <h1 className="text-2xl font-bold mb-6">Driver Menu</h1>
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <div
                key={item}
                onClick={() => setActivePage(item)}
                className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-200 ${
                  activePage === item ? "bg-green-100 font-semibold" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 space-y-6">
          {activePage === "Dashboard" && <DriverHome />}
          {activePage === "My Rides" && <MyRides />}
          {activePage === "Earnings" && <Earnings />}
          {activePage === "Profile" && <Profile />}
        </main>
      </div>
    </div>
  );
};

// ------------------ Driver Home ------------------
const DriverHome = () => (
  <>
    <h1 className="text-3xl font-semibold mb-4">Hello, Driver 👋</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <Card title="Assigned Rides" value="12" />
      <Card title="Completed Rides" value="45" />
      <Card title="Earnings" value="₹38,000" />
    </div>
  </>
);

// ------------------ Card Component ------------------
const Card = ({ title, value }) => (
  <div className="bg-white shadow rounded-xl p-6">
    <h2 className="text-lg font-medium">{title}</h2>
    <p className="text-2xl font-bold mt-2">{value}</p>
  </div>
);

// ------------------ My Rides ------------------
const MyRides = () => {
  const rides = [
    { user: "Alice", type: "Sedan", date: "15 Nov 2025", status: "Completed" },
    { user: "Bob", type: "SUV", date: "16 Nov 2025", status: "Upcoming" },
    { user: "Charlie", type: "Mini", date: "17 Nov 2025", status: "Upcoming" },
  ];

  const statusColors = {
    Completed: "bg-green-600",
    Upcoming: "bg-blue-600",
    Cancelled: "bg-red-600",
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">My Rides</h1>
      <div className="bg-white shadow rounded-xl p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">User</th>
              <th className="p-2">Ride Type</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {rides.map((ride, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-2">{ride.user}</td>
                <td className="p-2">{ride.type}</td>
                <td className="p-2">{ride.date}</td>
                <td className="p-2">
                  <span className={`text-white px-3 py-1 rounded-full ${statusColors[ride.status]}`}>
                    {ride.status}
                  </span>
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
const Earnings = () => {
  const earnings = [
    { date: "10 Nov", amount: 1200 },
    { date: "11 Nov", amount: 1500 },
    { date: "12 Nov", amount: 1800 },
    { date: "13 Nov", amount: 1300 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Earnings</h1>
      <div className="bg-white shadow rounded-xl p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Date</th>
              <th className="p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {earnings.map((e, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-2">{e.date}</td>
                <td className="p-2">₹{e.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ------------------ Profile ------------------
const Profile = () => (
  <div>
    <h1 className="text-3xl font-semibold mb-6">Profile</h1>
    <div className="bg-white shadow rounded-xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-1">Driver Name</label>
        <input type="text" defaultValue="Ravi Kumar" className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block font-medium mb-1">Email</label>
        <input type="email" defaultValue="ravi@example.com" className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block font-medium mb-1">Phone</label>
        <input type="text" defaultValue="+91 9876543210" className="w-full border rounded px-3 py-2" />
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Save Changes
      </button>
    </div>
  </div>
);

export default DriverDashboard;
