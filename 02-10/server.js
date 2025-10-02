import express from 'express';
import path from "path";
import { fileURLToPath } from 'url';
const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "templates", "home.html"));
});

app.get("/Página Genérica", (req, res) => {
    res.sendFile(path.join(__dirname, "templates", "home.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}/`);
});
