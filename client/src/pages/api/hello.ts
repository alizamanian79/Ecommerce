import type { NextApiRequest, NextApiResponse } from "next";
const api = process.env.API;
const requestMethod = 'GET';



type resData = {
  message?: string;
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<resData>,
) {
  if (req.method === requestMethod) {
    // Check if the api environment variable is set
    if (!api) {
      console.log("API environment variable is not set");
      return res.status(500).json({ message: "API environment variable is not set" });
    }

    // Process a GET request
    fetch(`${api}/1`)
      .then((response) => response.json())
      .then((response) =>
        res.status(200).json(response)
      )



    //Handler Api erros
      .catch((error) => {
        console.log("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
        return
      });
  } else {
    res.status(401).json({ message: "Request method does not matched !" });
  }
}