import express from "express";
import Dicas from "./src/controller/Dicas.js";

const app = express();
const port = 3000;

app.listen(port, () => {

    console.log(`Servidor online no endereço http://localhost:${port}`)
})

app.use(express.json());

Dicas.rotas(app);