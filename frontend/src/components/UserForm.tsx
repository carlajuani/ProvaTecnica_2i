import React, { useState } from 'react';
import { IUserData } from '../interfaces/IUserData';
import { saveUser } from '../services/userService';


const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<IUserData>({
    nickname: '',
    nombre: '',
    apellidos: '',
    dirección: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const savedUser = await saveUser(formData);
      console.log('User saved successfully:', savedUser);
      // Aquí puedes manejar post-guardado, como limpiar el formulario o mostrar un mensaje
    } catch (error) {
      console.error('Failed to save user:', error);
      // Manejar errores en la UI si es necesario
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nickname:
        <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} />
      </label>
      <label>
        Nombre:
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
      </label>
      <label>
        Apellidos:
        <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} />
      </label>
      <label>
        Dirección:
        <input type="text" name="dirección" value={formData.dirección} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <button type="submit">Save User</button>
    </form>
  );
};

export default UserForm;
