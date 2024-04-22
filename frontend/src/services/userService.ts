// src/services/UserService.ts
import { IUserData } from '../interfaces/IUserData';  // Asegúrate que la ruta de la interfaz es correcta.

export const saveUser = async (userData: IUserData): Promise<IUserData> => {
  try {
    const response = await fetch(`http://localhost:3000/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();  // Devuelve los datos del usuario guardados
  } catch (error) {
    console.error("Error saving user:", error);
    throw error;  // Re-lanza el error para manejarlo en un nivel superior si es necesario
  }
};

