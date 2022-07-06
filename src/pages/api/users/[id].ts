import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../@types/types";
import api from "../../../services/api";

const handler: NextApiHandler<User> = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id } = req.query;

  const users: User[] = await api.getAllUser();

  const user = users.find((user) => id === user.id.toString());

  if (user) {
    return res.json(user);
  }

  return res.status(404).json({ name: "error", message: "User not found" });
};

export default handler;
