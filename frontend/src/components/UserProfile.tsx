// src/components/UserProfile.tsx
import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../services/api';
import { useAuth } from '../context/AuthContext';

const UserProfile: React.FC = () => {
  const { token } = useAuth();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      getUserProfile(token)
        .then(data => {
          setUserData(data);
          setLoading(false);
        })
        .catch(err => {
          setError('Failed to fetch user data');
          setLoading(false);
        });
    }
  }, [token]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!userData) return <div>No user data available.</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <p><strong>Nickname:</strong> {userData.nickname}</p>
      <p><strong>Name:</strong> {userData.nombre}</p>
      <p><strong>Apellidos:</strong> {userData.apellidos}</p>
      <p><strong>Dirección:</strong> {userData.dirección}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
};

export default UserProfile;
