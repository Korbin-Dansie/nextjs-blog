import type { NextApiRequest, NextApiResponse } from "next";
import { Blog } from "../../../core/models/blog";
import { UnitOfWork } from "@/data/UnitOfWork";

import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { useSession } from "next-auth/react"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)

  let userId: number = 0;
  if(session){
    userId = session.user!.id;
  }

  const data: Blog = req.body;
  const blog: Blog = new Blog(
    0,
    userId,
    data.title,
    data.body,
  );

  const unitOfWork = new UnitOfWork();
  const blogs = unitOfWork.blogs();
  try {
    const success = await blogs.create(blog);
    res.status(200).json({ success });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Oops! Something went wrong when trying to create your post!",
    });
  }
}


