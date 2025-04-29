import { useState } from 'react';
import { Box, Tabs, Tab, Container } from '@mui/material';
import Chatbot from '../../components/user/Chatbot';
import DoctorList from '../../components/user/DoctorList';
import Appointments from '../../components/user/Appointments';
import Navbar from '../../components/layout/Navbar';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
        <Tabs value={activeTab} onChange={handleTabChange} centered sx={{ mb: 4 }}>
          <Tab label="Symptom Checker" />
          <Tab label="Find Doctors" />
          <Tab label="My Appointments" />
        </Tabs>

        {activeTab === 0 && <Chatbot />}
        {activeTab === 1 && <DoctorList />}
        {activeTab === 2 && <Appointments />}
      </Container>
    </Box>
  );
};

export default UserDashboard;