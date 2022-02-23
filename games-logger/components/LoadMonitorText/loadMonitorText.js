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
      setGameData([...gameData, response.payload]);
   }

   useEffect(() => {
      getGameData();
   }, []);

   console.log(gameData);
   return (
      <div className={css.container}>
         <div className={css.return_button}>
            <ReturnButton />
            {gameData[0] ? (
               <div>
                  {gameData[0].map((game, index) => (
                     <GameDisplay
                        key={index}
                        gametext={game.title}
                        playtimetext={game.playtime}
                        ratingtext={game.rating}
                        commenttext={game.comment}
                     />
                  ))}
               </div>
            ) : (
               <p>Loading</p>
            )}
         </div>
      </div>
   );
}
