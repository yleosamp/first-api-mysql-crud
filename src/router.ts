import Express, { Router, Request, Response } from "express";
import addUser, { loginUser } from "./controllers/loginControllers";

const router = Router();

export default router
  .get("/test/", (req: Request, res: Response) => {
    return res.status(200).json({ Status: "Ok!" });
  })
  .post("/register/", addUser)
  .post("/login/", loginUser);
