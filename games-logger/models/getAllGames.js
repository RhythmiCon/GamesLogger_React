import db from "../db/connection";

export async function getAllGames() {
   const result = await db.query(`SELECT * FROM games`);
}
