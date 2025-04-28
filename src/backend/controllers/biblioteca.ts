import { estudiantes } from "../db/fakeBiblio";

export function verificarEstudiante(username: string, password: string) {
  const estudiante = estudiantes.find(
    (e) => e.username === username && e.password === password
  );
  
  if (estudiante) {
    return {
      success: true,
      nombre: estudiante.fullName,
      libro: estudiante.favoriteBook,
    };
  } else {
    return {
      success: false,
      message: "Usuario o contrasena invalidos",
    };
  }
}
