import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [formData, setFormData] = useState({
    nickname: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegistration = async () => {
    try {
      // API call to create the user
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname: formData.nickname,
          password: formData.password
        })
      });

      const newUser = await response.json();
      if (response.ok) {
        // Redirect to complete the profile or update the user
        navigate(`/update-profile/${newUser.id}`, { state: { newUser } });
      } else {
        throw new Error('Failed to create user');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h2>Register User</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegistration();
      }}>
        <label htmlFor="nickname">Nickname:</label>
        <input
          type="nickname"
          id="nickname"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;

