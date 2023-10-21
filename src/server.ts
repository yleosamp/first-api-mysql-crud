import "dotenv/config";

var cors = require('cors')


import Express from "express";
import router from "./router";

const app = Express();
app.use(cors())

// Middlewares
app.use(Express.json());

app.use("/api/", router);


// Verificando se conectou no MySQL

// Ligando servidor express
app.listen(process.env.PORT, () =>
  console.log(`Servidor ligado na porta ${process.env.PORT}!`)
);
