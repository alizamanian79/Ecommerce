import type { NextApiRequest, NextApiResponse } from "next";

const requestMethod = "POST";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === requestMethod) {
    const data = { uPhone: req.body.uPhone, uPassword: req.body.uPassword };

    try {
      const response = await fetch(
        `http://localhost:3000/api/user/list`
      );
      const users = await response.json();

      const user = users.find(
        (item: any) =>
          item.uPhone === data.uPhone && item.uPassword === data.uPassword
      );

      if (user) {
        res.status(200).json({uID:user.uID});
      } else {
        res.status(401).json({ message: "Invalid phone number or password" });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Request method not allowed" });
  }
}
