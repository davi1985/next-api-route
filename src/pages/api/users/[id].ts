import { NextApiHandler } from "next";
import { users } from "../../../mock/users-mock";

type User = {
  name: string;
  age: number;
};

type UserResponse = User | Error;

const handler: NextApiHandler<UserResponse> = (req, res) => {
  const { id } = req.query;

  const user = users.find((user) => id === user.id.toString());

  if (user) {
    return res.json(user);
  }

  return res.status(404).json({ name: "error", message: "User not found" });
};

export default handler;
