import axios from 'axios';

export const getUserProfile = async (token: string) => {
  try {
    const response = await axios.get('http://localhost:3000/api/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
