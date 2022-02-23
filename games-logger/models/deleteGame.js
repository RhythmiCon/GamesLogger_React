import db from "../db/connection";

export async function deleteGame(id) {
   const data = await db.query("DELETE FROM games WHERE Id=($1)", [id]);
}
