import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../@types/types";
import api from "../../../services/api";

const handlerGet: NextApiHandler<User[]> = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const users = await api.getAllUser();

  if (req.method === "GET") return res.json(users);
};

const handlerPost: NextApiHandler<User> = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") return res.json({ name: "Fulano", age: 22 });
};

const handler: NextApiHandler<User> = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  switch (req.method) {
    case "GET":
      handlerGet(req, res);
    case "POST":
      handlerPost(req, res);
  }
};

export default handler;
