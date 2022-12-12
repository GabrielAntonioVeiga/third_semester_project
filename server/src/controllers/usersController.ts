import usersModel from "../models/userModel";
import { TokenBase, TokenGenerator } from "ts-token-generator";
import { Response, Request } from "express";

//memoria

type TokenI = {
  [key: string]: { id: string };
};

const session: TokenI = {};

const getAll = async (_req: any, res: any) => {
  const users = await usersModel.getAll();
  return res.status(200).json(users);
};

const createUser = async (req: any, res: any) => {
  const createdUser = await usersModel.createUser(req.body);
  return res.status(201).json(createdUser);
};

const loginUser = async (req: Request, res: Response): Promise<Response> => {
  const info = await usersModel.loginUser(req.body);

  const token = new TokenGenerator({
    bitSize: 512,
    baseEncoding: TokenBase.BASE16,
  }).generate();

  if (!info || info.toString() == "") {
    return res.status(400).json({ message: "User not found" });
  }

  session[token] = { id: JSON.stringify(info) };

  return res
    .status(200)
    .json({ message: "User logged in", sesid: token, information: info });
};

export default { getAll, createUser, loginUser };
