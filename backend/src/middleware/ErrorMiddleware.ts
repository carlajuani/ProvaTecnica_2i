import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    // Si les capçaleres ja s'han enviat, deleguem a Express per a que gestioni l'error
    return next(err);
  }

  let status = 500; // Estat per defecte per a errors interns del servidor
  let message = "An unknown error occurred";

  // Comprovem si l'error és una instància d'Error per una gestió més específica
  if (err instanceof Error) {
    message = err.message;
    if (err.name === "ValidationError") {
      status = 400;
    }
  }

  // Enviem la resposta d'error
  res.status(status).json({ error: { message, status } });

  // Cridem a next() sense arguments per finalitzar el middleware aquí
  next();
}

export default errorHandler;
