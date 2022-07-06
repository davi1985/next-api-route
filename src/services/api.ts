import fs from "fs";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllUser: async () => {
    const data = fs.readFileSync("users-mock.json", "utf-8");

    const users = JSON.parse(data);

    return users;
  },
};
