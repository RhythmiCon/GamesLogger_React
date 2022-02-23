import css from "./gameDisplay.module.css";

export default function GameDisplay({
   gametext,
   playtimetext,
   ratingtext,
   commenttext,
}) {
   return (
      <div className={css.container}>
         <p>
            <span className={css.key_span}>FILENAME:</span> {gametext}
         </p>
         <p>
            <span className={css.key_span}>PLAYTIME:</span> {playtimetext}
         </p>
         <p>
            <span className={css.key_span}>RATING:</span> {ratingtext}
         </p>
         <p>
            <span className={css.key_span}>COMMENTS:</span> {commenttext}
         </p>
      </div>
   );
}
