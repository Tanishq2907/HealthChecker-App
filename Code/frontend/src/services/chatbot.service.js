import api from './api';

export const getAIDiagnosis = async (symptoms) => {
  const response = await api.post('/chatbot/diagnose', { symptoms });
  return response.data;
};

export const getRecommendedDoctors = async (condition) => {
  const response = await api.get('/doctors/recommended', {
    params: { condition },
  });
  return response.data;
};