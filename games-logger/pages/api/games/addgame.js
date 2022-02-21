import { addGame } from "../../../models/getAllGames.js";

export async function handler({ body }, res) {
   if (req.method === "POST") {
      const { title, playtime, rating, comment } = body;
      await addGame(title, playtime, rating, comment);

      res.json({
         success: true,
      });
   } else {
      res.json({
         success: false,
      });
   }
}
