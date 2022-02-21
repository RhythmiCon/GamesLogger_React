import { getAllGames } from "../../../models/getAllGames.js";

export default async function handler(req, res) {
   if (req.method === "GET") {
      const response = await getAllGames();
      res.json({
         success: true,
         payload: response,
      });
   } else {
      res.json({
         success: false,
      });
   }
}
