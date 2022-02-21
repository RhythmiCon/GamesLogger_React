import db from "../db/connection";

export async function addGame(title, playtime, rating, comment) {
   const data = await query(
      "INSERT INTO games (title, playtime, rating, comment) VALUES ($1, $2, $3, $4)",
      [title, playtime, rating, comment]
   );
}
