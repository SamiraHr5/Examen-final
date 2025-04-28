import express from "express";
import cors from "cors";
import biblioRoutes from "./backend/routes/biblioRoutes";

const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json());
app.use("/api", biblioRoutes);

app.get("/", (req, res) => {
  res.send("Servidor NovaLearn activo");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
