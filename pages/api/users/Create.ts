import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../core/models/user";
import { UnitOfWork } from "@/data/UnitOfWork";
import { UserRegisterViewModel } from "@/core/view.models/UserRegisterViewModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: UserRegisterViewModel = req.body;
  const user: User = new User(
    0,
    data.firstName,
    data.lastName,
    data.email,
    data.password
  );
  const unitOfWork = new UnitOfWork();
  const users = unitOfWork.users();
  try {
    const success = await users.create(user);
    res.status(200).json({ success });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Oops! Something went wrong when trying to create your account!",
    });
  }
}
