import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Registrasi komponen Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

function ReportChart() {
  const navigate = useNavigate();

  // Data untuk diagram batang
  const barData = {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni"],
    datasets: [
      {
        label: "Jumlah Audit",
        data: [12, 19, 8, 15, 10, 7],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Opsi untuk diagram batang
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  // Data untuk diagram pie
  const pieData = {
    labels: ["Lulus", "Gagal", "Dalam Proses"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  // Opsi untuk diagram pie
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
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
      <div className="p-8 bg-gray-100 flex-grow">
        <h1 className="text-2xl font-bold text-center mb-8 text-blue-900">Laporan Audit</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Diagram Batang */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-center mb-4 text-blue-800">Jumlah Audit Per Bulan</h2>
            <Bar data={barData} options={barOptions} />
          </div>

          {/* Diagram Pie */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-center mb-4 text-blue-800">Hasil Audit</h2>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300">
        &copy; 2025 Dimas Rosyidin | Greenfields | Designed for Audit Management System
      </footer>
    </div>
  );
}

export default ReportChart;
