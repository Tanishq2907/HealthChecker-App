import { useState } from 'react';
import { Box, Tabs, Tab, Container } from '@mui/material';
import AvailabilityCalendar from '../../components/doctor/AvailabilityCalendar';
import AppointmentRequests from '../../components/doctor/AppointmentRequests';
import PatientHistory from '../../components/doctor/PatientHistory';
import Navbar from '../../components/layout/Navbar';

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar isDoctor />
      <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
        <Tabs value={activeTab} onChange={handleTabChange} centered sx={{ mb: 4 }}>
          <Tab label="Availability" />
          <Tab label="Appointment Requests" />
          <Tab label="Patient History" />
        </Tabs>

        {activeTab === 0 && <AvailabilityCalendar />}
        {activeTab === 1 && <AppointmentRequests />}
        {activeTab === 2 && <PatientHistory />}
      </Container>
    </Box>
  );
};

export default DoctorDashboard;