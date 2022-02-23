import { deleteGame } from "../../../models/deleteGame";

export default async function handler(req, res) {
   if (req.method === "DELETE") {
      let body = req.body;
      const { id } = body;
      await deleteGame(id);

      res.json({
         success: true,
      });
   } else {
      res.json({
         success: false,
      });
   }
}
