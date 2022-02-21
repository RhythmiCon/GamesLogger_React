import { addGame } from "../../../models/addGame.js";

export default async function handler(req, res) {
   if (req.method === "POST") {
      let body = req.body;
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
