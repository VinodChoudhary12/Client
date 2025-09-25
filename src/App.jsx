// import React, { useState } from 'react';
// import { LoginPage } from './components/LoginPage';
// import  Dashboard  from './components/Dashboard';
// import { TodayPricing } from './components/TodayPricing';
// import { Reports } from './components/Reports';
// import { Notifications } from './components/Notifications';
// import { ProcessManagement } from './components/ProcessManagement';
// import { DispatchTracking } from './components/DispatchTracking';
// import { CreateOrder } from './components/CreateOrder';
// import  Sidebar  from './components/Sidebar';

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentPage, setCurrentPage] = useState('dashboard');

//   if (!isLoggedIn) {
//     return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
//   }

//   const renderCurrentPage = () => {
//     switch (currentPage) {
//       case 'dashboard':
//         return <Dashboard />;
//       case 'pricing':
//         return <TodayPricing />;
//       case 'reports':
//         return <Reports />;
//       case 'notifications':
//         return <Notifications />;
//       case 'processes':
//         return <ProcessManagement />;
//       case 'dispatch':
//         return <DispatchTracking />;
//       case 'create-order':
//         return <CreateOrder />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-background">
//       <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} onLogout={() => setIsLoggedIn(false)} />
//       <main className="flex-1 overflow-y-auto">
//         {renderCurrentPage()}
//       </main>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import { LoginPage } from './components/LoginPage';
// import Dashboard from './components/Dashboard';
// import { TodayPricing } from './components/TodayPricing';
// import { Reports } from './components/Reports';
// import { Notifications } from './components/Notifications';
// import { ProcessManagement } from './components/ProcessManagement';
// import { DispatchTracking } from './components/DispatchTracking';
// import { CreateOrder } from './components/CreateOrder';
// import Sidebar from './components/Sidebar';

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   if (!isLoggedIn) {
//     return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
//   }

//   return (
//     <Router>
//       <div className="flex h-screen bg-background">
//         <Sidebar onLogout={() => setIsLoggedIn(false)} />
//         <main className="flex-1 overflow-y-auto">
//           <Routes>
//             <Route path="/" element={<Navigate to="/dashboard" replace />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/pricing" element={<TodayPricing />} />
//             <Route path="/reports" element={<Reports />} />
//             <Route path="/notifications" element={<Notifications />} />
//             <Route path="/processes" element={<ProcessManagement />} />
//             <Route path="/dispatch" element={<DispatchTracking />} />
//             <Route path="/create-order" element={<CreateOrder />} />
//             {/* Optional 404 route */}
//             <Route path="*" element={<Dashboard />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }


//Working
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import { LoginPage } from './components/LoginPage';
// import Dashboard from './components/Dashboard';
// import { TodayPricing } from './components/TodayPricing';
// import { Reports } from './components/Reports';
// import { Notifications } from './components/Notifications';
// import { ProcessManagement } from './components/ProcessManagement';
// import { DispatchTracking } from './components/DispatchTracking';
// import { CreateOrder } from './components/CreateOrder';
// import Sidebar from './components/Sidebar';

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   if (!isLoggedIn) {
//     return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
//   }

//   return (
//     <Router>
//       <div className="flex h-screen bg-background">
//         <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//         <main className="flex-1 overflow-y-auto">
//           <Routes>
//             <Route path="/" element={<Navigate to="/dashboard" replace />} />
//             <Route path="/dashboard" element={<Dashboard toggleSidebar={toggleSidebar} />} />
//             <Route path="/pricing" element={<TodayPricing />} />
//             <Route path="/reports" element={<Reports />} />
//             <Route path="/notifications" element={<Notifications />} />
//             <Route path="/processes" element={<ProcessManagement />} />
//             <Route path="/dispatch" element={<DispatchTracking />} />
//             <Route path="/create-order" element={<CreateOrder />} />
//             <Route path="*" element={<Dashboard />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// import  { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import Sidebar from './components/Sidebar';
// import { LoginPage } from './components/LoginPage';
// import Dashboard from './components/Dashboard';
// import { TodayPricing } from './components/TodayPricing';
// import { Reports } from './components/Reports';
// import { Notifications } from './components/Notifications';
// import { ProcessManagement } from './components/ProcessManagement';
// import { DispatchTracking } from './components/DispatchTracking';
// import { CreateOrder } from './components/CreateOrder';
// import { MyOrders } from './components/MyOrders';

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

//   if (!isLoggedIn) {
//     return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
//   }

//   return (
//     <Router>
//       {/* Sidebar and content MUST be inside Router */}
//       <header className="bg-[#0072bc] text-white p-4 lg:hidden">
//         <div className="flex justify-between items-center">

//           <button onClick={toggleSidebar} className=" text-2xl">☰</button>


//           <div className="flex items-center space-x-2 cursor-pointer ml-6 " onClick={toggleDropdown} >

//             <img className='w-8 rounded-full  bg-sky-600 ' src='Images/avatar.png' />
//             <span>A. B. Electricals</span>
//             <span className='text-xs'>▼</span>
//           </div>
//         </div>
//         {isDropdownOpen && (
//           <div className={`absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-2 z-10 ease-in-out transition-transform duration-500`} // Increased duration
//             style={{ transform: isDropdownOpen ? 'translateY(20px)' : 'translateY(0)', opacity: isDropdownOpen ? 1 : 0 }}>
//             <ul>
//               <li className="p-2 hover:bg-gray-100 cursor-pointer">Profile</li>
//               <li className="p-2 hover:bg-gray-100 cursor-pointer">Change Password</li>
//               <li className="p-2 hover:bg-gray-100 cursor-pointer">Logout</li>
//             </ul>
//           </div>
//         )}
//       </header>
//       <div className="flex h-screen overflow-hidden">
//         {/* Optional overlay for mobile */}
//         {isSidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
//             onClick={toggleSidebar}
//           />
//         )}

//         <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//         <div className=" flex flex-col flex-1">
//           <main className="flex-1 overflow-y-auto">
//             <Routes>
//               <Route path="/" element={<Navigate to="/dashboard" replace />} />
//               <Route path="/dashboard" element={<Dashboard toggleSidebar={toggleSidebar} />} />
//               <Route path="/pricing" element={<TodayPricing />} />
//               <Route path="/reports" element={<Reports />} />
//               <Route path="/notifications" element={<Notifications />} />
//               <Route path="/processes" element={<ProcessManagement />} />
//               <Route path="/dispatch" element={<DispatchTracking />} />
//               <Route path="/create-order" element={<CreateOrder />} />
//               <Route path="/my-order" element={<MyOrders />} />

//               <Route path="*" element={<Dashboard />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </Router>
//   );
// }


//This is Working
// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import Sidebar from './components/Sidebar';
// import { LoginPage } from './components/LoginPage';
// import Dashboard from './components/Dashboard';
// import { TodayPricing } from './components/TodayPricing';
// import { Reports } from './components/Reports';
// import { Notifications } from './components/Notifications';
// import { ProcessManagement } from './components/ProcessManagement';
// import { DispatchTracking } from './components/DispatchTracking';
// import { CreateOrder } from './components/CreateOrder';
// import { MyOrders } from './components/MyOrders';
// import logo from './Images/Krity_logo.png';

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   if (!isLoggedIn) {
//     return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
//   }

//   return (
//     <Router>
//       <header className="bg-[#0072bc] text-white p-4 lg:hidden">
//         <div className="flex justify-between items-center">
//           <button onClick={toggleSidebar} className="text-2xl">☰</button>
//           <div className="flex items-center space-x-2 cursor-pointer ml-6" onClick={toggleDropdown}>
//             <img className=" w-10 rounded-full bg-sky-600" src={logo} alt="User avatar" />
//             {/* <span>A. B. Electricals</span> */}
//             {/* <span className="text-xs">▼</span> */}
//           </div>
//         </div>
//         {isDropdownOpen && (
//           <div
//             className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-2 z-10 ease-in-out transition-transform duration-500"
//             style={{ transform: isDropdownOpen ? 'translateY(20px)' : 'translateY(0)', opacity: isDropdownOpen ? 1 : 0 }}
//           >
//             <ul>
//               <li className="p-2 hover:bg-gray-100 cursor-pointer">Profile</li>
//               <li className="p-2 hover:bg-gray-100 cursor-pointer">Change Password</li>
//               <li className="p-2 hover:bg-gray-100 cursor-pointer">Logout</li>
//             </ul>
//           </div>
//         )}
//       </header>
//       <div className="flex min-h-screen">
//         {isSidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
//             onClick={toggleSidebar}
//           />
//         )}
//         <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//         <div className="flex flex-col flex-1 overflow-x-auto">
//           <main className="flex-1 overflow-y-auto">
//             <Routes>
//               <Route path="/" element={<Navigate to="/dashboard" replace />} />
//               <Route path="/dashboard" element={<Dashboard toggleSidebar={toggleSidebar} />} />
//               <Route path="/pricing" element={<TodayPricing />} />
//               <Route path="/reports" element={<Reports />} />
//               <Route path="/notifications" element={<Notifications />} />
//               <Route path="/processes" element={<ProcessManagement />} />
//               <Route path="/dispatch" element={<DispatchTracking />} />
//               <Route path="/create-order" element={<CreateOrder />} />
//               <Route path="/my-order" element={<MyOrders />} />
//               <Route path="*" element={<Dashboard />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </Router>
//   );
// }


// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import Sidebar from './components/Sidebar';
// import { LoginPage } from './components/LoginPage';
// import Dashboard from './components/Dashboard';
// import { TodayPricing } from './components/TodayPricing';
// import { Reports } from './components/Reports';
// import { Notifications } from './components/Notifications';
// import { ProcessManagement } from './components/ProcessManagement';
// import { DispatchTracking } from './components/DispatchTracking';
// import { CreateOrder } from './components/CreateOrder';
// import { MyOrders } from './components/MyOrders';

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   if (!isLoggedIn) {
//     return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
//   }

//   return (
//     <Router>
//       <header className="bg-[#0072bc] text-white p-4 lg:hidden">
//         <div className="flex justify-between items-center">
//           <button onClick={toggleSidebar} className="text-2xl">☰</button>
//           <div className="flex items-center space-x-2 cursor-pointer ml-6" onClick={toggleDropdown}>
//             <img className="w-8 rounded-full bg-sky-600" src="Images/avatar.png" alt="User avatar" />
//             <span>A. B. Electricals</span>
//             <span className="text-xs">▼</span>
//           </div>
//         </div>
//         {isDropdownOpen && (
//           <div
//             className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-2 z-10 ease-in-out transition-transform duration-500"
//             style={{ transform: isDropdownOpen ? 'translateY(20px)' : 'translateY(0)', opacity: isDropdownOpen ? 1 : 0 }}
//           >
//             <ul>
//               <li className="p-2 hover:bg-gray-100 cursor-pointer">Profile</li>
//               <li className="p-2 hover:bg-gray-100 cursor-pointer">Change Password</li>
//               <li className="p-2 hover:bg-gray-100 cursor-pointer">Logout</li>
//             </ul>
//           </div>
//         )}
//       </header>
//       <div className="flex min-h-screen">
//         {isSidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
//             onClick={toggleSidebar}
//           />
//         )}
//         <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//         <div className="flex flex-col flex-1 lg:ml-64">
//           <main className="flex-1 overflow-y-auto">
//             <Routes>
//               <Route path="/" element={<Navigate to="/dashboard" replace />} />
//               <Route path="/dashboard" element={<Dashboard toggleSidebar={toggleSidebar} />} />
//               <Route path="/pricing" element={<TodayPricing />} />
//               <Route path="/reports" element={<Reports />} />
//               <Route path="/notifications" element={<Notifications />} />
//               <Route path="/processes" element={<ProcessManagement />} />
//               <Route path="/dispatch" element={<DispatchTracking />} />
//               <Route path="/create-order" element={<CreateOrder />} />
//               <Route path="/my-order" element={<MyOrders />} />
//               <Route path="*" element={<Dashboard />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </Router>
//   );
// }


import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import { LoginPage } from './components/LoginPage';
import Dashboard from './components/Dashboard';
import { TodayPricing } from './components/TodayPricing';
import { Reports } from './components/Reports';
import { Notifications } from './components/Notifications';
import { ProcessManagement } from './components/ProcessManagement';
import { DispatchTracking } from './components/DispatchTracking';
import { CreateOrder } from './components/CreateOrder';
import { MyOrders } from './components/MyOrders';
import logo from './Images/Krity_logo.png';
import Profile from './components/Profile';
import ForgetPassword from './components/ForgetPassword';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Router>
      <header className="bg-[#0072bc] text-white p-4 lg:hidden">
        <div className="flex justify-between items-center">
          <button onClick={toggleSidebar} className="text-2xl">☰</button>
          {/* <div className="flex items-center space-x-2 cursor-pointer ml-6" onClick={toggleDropdown}>
            <img className="w-8 rounded-full bg-sky-600" src={logo} alt="User avatar" />
            <span>A. B. Electricals</span>
            <span className="text-xs">▼</span>
          </div> */}
        </div>
        {/* {isDropdownOpen && (
          <div
            className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-2 z-10 ease-in-out transition-transform duration-500"
            style={{ transform: isDropdownOpen ? 'translateY(20px)' : 'translateY(0)', opacity: isDropdownOpen ? 1 : 0 }}
          >
            <ul>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Profile</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Change Password</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Logout</li>
            </ul>
          </div>
        )} */}
      </header>
      <div className="flex min-h-screen">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col flex-1 min-w-0 lg:ml-64 bg-gray-100 font-sans">
          <main className="flex-1 overflow-y-auto overflow-x-visible mt-4">
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard toggleSidebar={toggleSidebar} />} />
              <Route path="/pricing" element={<TodayPricing />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/processes" element={<ProcessManagement />} />
              <Route path="/dispatch" element={<DispatchTracking />} />
              <Route path="/create-order" element={<CreateOrder />} />
              <Route path="/my-order" element={<MyOrders />} />
              <Route path="*" element={<Dashboard />} />
              <Route path='/Profile' element={<Profile />} />
              <Route path='/ForgetPassword' element={<ForgetPassword />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

