import { Request, Response } from "express";
import { verificarEstudiante } from "../controllers/biblioteca";

export function loginHandler(req: Request, res: Response) {
  const { username, password } = req.body;

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
