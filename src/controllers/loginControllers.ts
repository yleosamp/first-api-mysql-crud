import { Request, Response } from "express";
const md5 = require("md5");
import connection from "../db";

const addUser = async (req: Request, res: Response) => {
  const requests: [string, string, string, string] = [
    req.body.nome,
    req.body.email,
    req.body.login,
    req.body.password,
  ];
  const query = `INSERT INTO user(nome, email, login, password) VALUES ('${requests[0]}', '${requests[1]}', '${requests[2]}', MD5('${requests[3]}'))`;

  await connection.execute(query);

  return res.status(201).json({ "Conteúdo registrado": "Ok" });
};

export const loginUser = async (req: Request, res: Response) => {
  const password = req.body.password;
  const login = req.body.login;

  const userInfo: any = await connection.execute(
    "SELECT password FROM testenode.user WHERE login = ?",
    [login]
  );

  console.log(userInfo[0][0].password);
  if (userInfo[0][0].password === md5(password)) {
    return res.status(200).send({ Logado: true });
  } else {
    return res.status(200).send({ Logado: false });
  }
};

export default addUser;
