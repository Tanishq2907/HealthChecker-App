import api from './api';

export const getDoctors = async () => {
  const response = await api.get('/doctors');
  return response.data;
};

export const getRecommendedDoctors = async (condition) => {
  const response = await api.get('/doctors/recommended', { params: { condition } });
  return response.data;
};

export const updateDoctorAvailability = async (doctorId, availability) => {
  const response = await api.put(`/doctors/${doctorId}/availability`, availability);
  return response.data;
};