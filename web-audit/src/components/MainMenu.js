import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <div className="min-h-screen from-blue-900 to-blue-600 text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-800 shadow-md">
        <div className="text-2xl font-bold">Greenfields</div>
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="main-menu" className="hover:text-orange-400">Home</a>
          </li>
          <li>
            <a href="https://greenfieldsdairy.com/tentang-greenfields" className="hover:text-orange-400">About Us</a>
          </li>
          <li>
            <a href="login" className="hover:text-orange-400">Logout</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">PT. Greenfields Indonesia</h1>
        <p className="text-blue-800 text-center mb-12 max-w-xl">
          Welcome to the Greenfields Audit Management System. Select an option below to continue your tasks.
        </p>
      </div>

      {/* Rounded Menu Boxes */}
      <div className="bg-blue-800 py-10 rounded-t-3xl flex justify-center">
        <div className="grid grid-cols-2 gap-8 w-4/5 max-w-2xl">
          <Link
            to="/profile"
            className="bg-blue-500 hover:bg-blue-800 text-white py-4 rounded-lg shadow-md text-center transition font-medium text-lg"
          >
            Profile
          </Link>
          <Link
            to="/report"
            className="bg-blue-500 hover:bg-blue-800 text-white py-4 rounded-lg shadow-md text-center transition font-medium text-lg"
          >
            Report Audit
          </Link>
          <Link
            to="/audit-form"
            className="bg-blue-500 hover:bg-blue-800 text-white py-4 rounded-lg shadow-md text-center transition font-medium text-lg"
          >
            Input Audit
          </Link>
          <Link
            to="/audit-list"
            className="bg-blue-500 hover:bg-blue-800 text-white py-4 rounded-lg shadow-md text-center transition font-medium text-lg"
          >
            View Audits
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300">
        &copy; 2025 Dimas Rosyidin | Greenfields | Designed for Audit Management System
      </footer>
    </div>
  );
}

export default MainMenu;
