import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import MainMenu from './components/MainMenu';
import AuditForm from './components/AuditForm';
import AuditList from './components/AuditList';
import Profile from './components/Profile';
import ReportChart from './components/ReportChart';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main-menu" element={<MainMenu />} />
        <Route path="/audit-form" element={<AuditForm />} />
        <Route path="/audit-list" element={<AuditList />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/report/" element={<ReportChart />} />
      </Routes>
    </Router>
  );
}

export default App;
