import { NextApiHandler } from "next";
import { users } from "../../../mock/users-mock";

type User = {
  name: string;
  age: number;
};

const handlerGet: NextApiHandler<User[]> = (req, res) => {
  if (req.method === "GET") return res.json(users);
};

const handlerPost: NextApiHandler<User> = (req, res) => {
  if (req.method === "POST") return res.json({ name: "Fulano", age: 22 });
};

const handler: NextApiHandler<User[] | User> = (req, res) => {
  switch (req.method) {
    case "GET":
      handlerGet(req, res);
    case "POST":
      handlerPost(req, res);
  }
};

export default handler;
