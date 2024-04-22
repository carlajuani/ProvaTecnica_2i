import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import { router } from './routes/index';
import errorHandler from './middleware/ErrorMiddleware';

const app = express();

app.use(cors({
  origin: 'http://localhost:3001'  // URL del frontend
}));

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Usar las rutas definidas
app.use('/api', router);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
