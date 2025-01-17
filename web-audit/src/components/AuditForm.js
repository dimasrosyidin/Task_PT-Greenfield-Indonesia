import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AuditForm() {
  const [auditTitle, setAuditTitle] = useState('');
  const [auditArea, setAuditArea] = useState('');
  const [auditDate, setAuditDate] = useState('');
  const [closeDate, setCloseDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/audits', {
        auditTitle,
        auditArea,
        auditDate,
        closeDate,
        auditorId: 1, // ID Auditor, diganti dengan data login sebenarnya
      });
      alert('Audit berhasil disimpan!');
    } catch (error) {
      alert('Gagal menyimpan audit!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-600 text-white flex flex-col">
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

      {/* Back Button */}
      <div className="flex items-center space-x-2 px-8 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white hover:text-orange-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-8.707a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L9 11.414l-1.293 1.293a1 1 0 01-1.414-1.414l3-3z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Input Audit</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="auditTitle" className="block text-gray-700 font-medium mb-2">
                Judul Audit
              </label>
              <input
                type="text"
                id="auditTitle"
                placeholder="Masukkan judul audit"
                value={auditTitle}
                onChange={(e) => setAuditTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="auditArea" className="block text-gray-700 font-medium mb-2">
                Area Audit
              </label>
              <input
                type="text"
                id="auditArea"
                placeholder="Masukkan area audit"
                value={auditArea}
                onChange={(e) => setAuditArea(e.target.value)}
                className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="auditDate" className="block text-gray-700 font-medium mb-2">
                Tanggal Audit
              </label>
              <input
                type="datetime-local"
                id="auditDate"
                value={auditDate}
                onChange={(e) => setAuditDate(e.target.value)}
                className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="closeDate" className="block text-gray-700 font-medium mb-2">
                Tanggal Penutupan
              </label>
              <input
                type="datetime-local"
                id="closeDate"
                value={closeDate}
                onChange={(e) => setCloseDate(e.target.value)}
                className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300">
        &copy; 2025 Dimas Rosyidin | Greenfields | Designed for Audit Management System
      </footer>
    </div>
  );
}

export default AuditForm;
