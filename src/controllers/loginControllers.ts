import { Request, Response } from "express";
import connection from "../db";

const addUser = async (req: Request, res: Response) => {
  const requests: [string, string, string, string] = [
    req.body.nome,
    req.body.email,
    req.body.login,
    req.body.password,
  ];
  const query = `INSERT INTO user(nome, email, login, password) VALUES ('${requests[0]}', '${requests[1]}', '${requests[2]}', '${requests[3]}')`;

  await connection.execute(query);

  return res.status(201).json({ "Conteúdo registrado": "Ok" });
};

export default addUser;
