import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-blue-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-800 shadow-md">
        <div className="text-2xl font-bold text-white">Greenfields</div>
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="https://greenfieldsdairy.com/tentang-greenfields" className="hover:text-orange-500">About Us</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-grow flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-orange-500">CODING TASK</h1>
        <p className="mt-4 text-lg max-w-3xl">
          Dimas Rosyidin <br />
          <span className="text-orange-400 font-semibold">PT. Greenfields Indonesia</span>
        </p>
        <p className="mt-6 text-sm max-w-2xl text-gray-300">
        Welcome to the Greenfields Audit Management System
        </p>
        <div className="mt-8 space-x-4">
          <a 
            href="/register"
            className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 transition"
          >
            SIGN UP
          </a>
          <a 
            href="/login"
            className="border border-orange-500 text-orange-500 py-2 px-6 rounded hover:bg-orange-600 hover:text-white transition"
          >
            SIGN IN
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300">
        &copy; 2025 Dimas Rosyidin | PT. Greenfields Indonesia | All rights reserved
      </footer>
    </div>
  );
};

export default LandingPage;
