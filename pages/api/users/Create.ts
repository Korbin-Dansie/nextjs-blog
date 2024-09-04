import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../core/models/user";
import { UserRepository } from "../../../data/repository/UserRepository";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: User = req.body;
  const user: User = new User(
    0,
    data.firstName,
    data.lastName,
    data.email,
    data.hashedPassword
  );

  const users = new UserRepository();

  const success = await users.create(user);
  res.status(200).json({ success });
}
