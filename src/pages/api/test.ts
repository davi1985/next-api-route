import { NextApiHandler } from "next";

type Test = {
  name: string;
};

const handler: NextApiHandler<Test> = (req, res) => {
  res.json({ name: "Okay" });
};

export default handler;
