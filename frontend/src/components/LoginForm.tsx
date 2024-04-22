import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginForm: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setToken } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickname, password }),
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
  
      setToken(data.token);
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div>
    <h2>Login Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nickname">Nickname:</label>
        <input
          id="nickname"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Log In'}
      </button>
    </form>
    {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>
  );
};

export default LoginForm;


