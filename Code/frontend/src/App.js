import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import DoctorDashboard from './pages/doctor/Dashboard';
import UserDashboard from './pages/user/Dashboard';
import Appointments from './pages/user/Appointments';
import Doctors from './pages/user/Doctors';
import Calendar from './pages/doctor/Calendar';
import Patients from './pages/doctor/Patients';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* User Side */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/appointments" element={<Appointments />} />
        <Route path="/user/doctors" element={<Doctors />} />
        
        {/* Doctor Side */}
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor/calendar" element={<Calendar />} />
        <Route path="/doctor/patients" element={<Patients />} />

        {/* Default Route */}
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
