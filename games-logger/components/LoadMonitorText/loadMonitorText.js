import { useState, useEffect } from "react";
import Form from "../Form/form";
import GameDisplay from "../GameDisplay/gameDisplay";
import ReturnButton from "../ReturnButton/returnButton";
import css from "./loadMonitorText.module.css";

export default function LoadMonitorText() {
   const [gameData, setGameData] = useState([]);

   async function getGameData() {
      const data = await fetch("/api/games/getgames");
      const response = await data.json();
      setGameData([...gameData, ...response.payload]);
   }

   console.log(gameData);

   async function handleDelete(id) {
      await fetch("./api/games/deletegame", {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            id: id,
         }),
      });
      let index = gameData.findIndex((game) => {
         return game.id === id;
      });

      console.log(gameData);
      setGameData([...gameData.slice(0, index), ...gameData.slice(index + 1)]);
   }

   useEffect(() => {
      getGameData();
   }, []);

   console.log(gameData);

   return (
      <div className={css.container}>
         <div className={css.return_button}>
            <ReturnButton />
         </div>
         {gameData ? (
            <div>
               {gameData.map((game, index) => (
                  <GameDisplay
                     key={index}
                     handleDelete={handleDelete}
                     id={game.id}
                     gametext={game.title}
                     playtimetext={game.playtime}
                     ratingtext={game.rating}
                     commenttext={game.comment}
                  />
               ))}
            </div>
         ) : (
            <div className={css.loading_text_container}>
               <p className={css.loading_text}>Loading</p>
            </div>
         )}
      </div>
   );
}
