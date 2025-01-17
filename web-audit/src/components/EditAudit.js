import React, { useState } from 'react';

function EditAudit() {
  const [auditData, setAuditData] = useState({
    title: '',
    area: '',
    date: '',
    closeDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuditData({ ...auditData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Audit data updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Edit Audit</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Audit Title</label>
            <input
              type="text"
              name="title"
              value={auditData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-gray-700">Audit Area</label>
            <input
              type="text"
              name="area"
              value={auditData.area}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-gray-700">Audit Date</label>
            <input
              type="date"
              name="date"
              value={auditData.date}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-gray-700">Close Date</label>
            <input
              type="date"
              name="closeDate"
              value={auditData.closeDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditAudit;
