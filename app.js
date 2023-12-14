const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

// Configurar middleware para servir archivos estáticos (HTML, CSS, etc.)
app.use(express.static("public"));

// Rutas para cada pestaña
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});

// Iniciar el servidor en el puerto 3030
app.listen(port, () => {
    console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
