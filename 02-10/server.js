import express from 'express';
import path, { dirname } from "path";
import { fileURLToPath } from 'url';
const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join (__dirname,'public')));
app.use(express.static(path.join (__dirname,'scripts')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "templates", "home.html"));
});

app.get("/Página Genérica", (req, res) => {
    res.sendFile(path.join(__dirname, "templates", "home.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}/`);
});



//cadastro.html
app.get("/cadastro", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "cadastro.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});