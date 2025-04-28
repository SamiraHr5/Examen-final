import express from "express";
import biblioRoutes from "./backend/routes/biblioRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", biblioRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
