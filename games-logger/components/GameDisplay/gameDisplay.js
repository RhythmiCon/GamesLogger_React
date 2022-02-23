import css from "./gameDisplay.module.css";

export default function GameDisplay({
   id,
   gametext,
   playtimetext,
   ratingtext,
   commenttext,
   handleDelete,
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
         <div className={css.upd_del_buttons}>
            <p className={css.upd_button}>EDIT</p>
            <p onClick={() => handleDelete(id)} className={css.del_button}>
               DELETE
            </p>
         </div>
      </div>
   );
}
