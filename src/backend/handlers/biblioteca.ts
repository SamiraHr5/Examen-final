import { Request, Response } from "express";
import { verificarEstudiante } from "../controllers/biblioteca";

export function loginHandler(req: Request, res: Response) {
  const username = req.query.username as string;
  const password = req.query.password as string;

  const resultado = verificarEstudiante(username, password);

  if (resultado.success) {
    res.status(200).json({
      message: `¡Bienvenido, ${resultado.nombre}! Disfruta de tu lectura.`,
      libroFavorito: resultado.libro,
    });
  } else {
    res.status(401).json({
      error: resultado.message,
    });
  }
}
