import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function AuditList() {
  const [audits, setAudits] = useState([]);
  const navigate = useNavigate();

  // Fetch audit data
  useEffect(() => {
    const fetchAudits = async () => {
      try {
        const response = await axios.get('/api/audits');
        setAudits(response.data);
      } catch (error) {
        console.error('Failed to fetch audits:', error);
      }
    };
    fetchAudits();
  }, []);

  // Delete audit by ID
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this audit?')) {
      try {
        await axios.delete(`/api/audits/${id}`);
        setAudits((prev) => prev.filter((audit) => audit.id !== id));
        alert('Audit deleted successfully!');
      } catch (error) {
        console.error('Failed to delete audit:', error);
        alert('Failed to delete audit!');
      }
    }
  };

  return (
    <div className="min-h-screen bg-to-br from-blue-900 to-blue-600 text-white flex flex-col">
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
          className="flex items-center text-blue-800 hover:text-blue-900 transition"
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
      <div className="flex-grow flex flex-col items-center px-8">
        <div className="w-full max-w-5xl">
          <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Audit Results</h1>
          <div className="flex justify-between mb-4">
            <button
              onClick={() => navigate('/audit-form')}
              className="bg-blue-800 text-white px-4 py-2 rounded font-semibold hover:bg-green-600 transition"
            >
              + Add New Audit
            </button>
          </div>
          <table className="w-full bg-white text-gray-700 shadow-lg rounded overflow-hidden">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="py-2 px-4 text-left">Title</th>
                <th className="py-2 px-4 text-left">Area</th>
                <th className="py-2 px-4 text-left">Audit Date</th>
                <th className="py-2 px-4 text-left">Close Date</th>
                <th className="py-2 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {audits.length > 0 ? (
                audits.map((audit) => (
                  <tr key={audit.id} className="border-b">
                    <td className="py-2 px-4">{audit.auditTitle}</td>
                    <td className="py-2 px-4">{audit.auditArea}</td>
                    <td className="py-2 px-4">{new Date(audit.auditDate).toLocaleString()}</td>
                    <td className="py-2 px-4">{new Date(audit.closeDate).toLocaleString()}</td>
                    <td className="py-2 px-4 text-center space-x-2">
                      <Link
                        to={`/edit-audit/${audit.id}`}
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(audit.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-4 text-center text-gray-500">
                    No audit data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300">
        &copy; 2025 Dimas Rosyidin | Greenfields | Designed for Audit Management System
      </footer>
    </div>
  );
}

export default AuditList;
