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

  console.log("Tentativa de adicionar user")
  return res.status(201).json({ "Conteúdo registrado": "Ok" });
};

export const loginUser = async (req: Request, res: Response) => {
  const password = req.body.password;
  const login = req.body.login;

  try {
    const userInfo: any = await connection.execute(
      "SELECT password FROM testenode.user WHERE login = ?",
      [login]
    );

    const profile: any = await connection.execute("SELECT * FROM testenode.user WHERE login = ?", [login])

    if(userInfo){
      if (userInfo[0][0].password === md5(password)) {
        return res.status(200).send({ Logado: profile });
      } else {
        return res.status(203).send({ Logado: false });
      }
    }
  } catch (error) {
    return res.status(203).send({ Logado: "Usuário não encontrado!" })
  }
};

export default addUser;
