import { useState } from "react";

import css from "./form.module.css";

export default function Form() {
   //state for whole form goes here
   const [formData, setFormData] = useState({});

   function handleChange(key, value) {
      setFormData({
         ...formData,
         [key]: value,
      });
   }

   async function handleClick({ title, playtime, rating, comment }) {
      const data = await fetch("/api/games/addgame", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            title: title,
            playtime: playtime,
            rating: rating,
            comment: comment,
         }),
      });
   }

   //post request made here also?
   return (
      <div className={css.container}>
         <form className={css.form}>
            <div className={`${css.game_title} ${css.form_item}`}>
               <label htmlFor="gametitle">Game:</label>
               <input
                  onChange={(e) => handleChange("title", e.target.value)}
                  className={css.text_field}
                  name="gametitle"
               />
            </div>
            <div className={`${css.playtime} ${css.form_item}`}>
               <label htmlFor="playtime">Playtime:</label>
               <input
                  onChange={(e) => handleChange("playtime", e.target.value)}
                  className={css.text_field}
                  name="playtime"
               />
            </div>
            <div className={`${css.rating} ${css.form_item}`}>
               <label htmlFor="rating_one">1</label>
               <input
                  onChange={(e) => handleChange("rating", e.target.value)}
                  className={css.radio_button}
                  type="radio"
                  name="rating_one"
                  value="1"
               />
               <label htmlFor="rating_two">2</label>
               <input
                  onChange={(e) => handleChange("rating", e.target.value)}
                  className={css.radio_button}
                  type="radio"
                  name="rating_two"
                  value="2"
               />
               <label htmlFor="rating_three">3</label>
               <input
                  onChange={(e) => handleChange("rating", e.target.value)}
                  className={css.radio_button}
                  type="radio"
                  name="rating_three"
                  value="3"
               />
               <label htmlFor="rating_four">4</label>
               <input
                  onChange={(e) => handleChange("rating", e.target.value)}
                  className={css.radio_button}
                  type="radio"
                  name="rating_four"
                  value="4"
               />
               <label htmlFor="rating_five">5</label>
               <input
                  onChange={(e) => handleChange("rating", e.target.value)}
                  className={css.radio_button}
                  type="radio"
                  name="rating_five"
                  value="5"
               />
               <label htmlFor="rating_six">6</label>
               <input
                  onChange={(e) => handleChange("rating", e.target.value)}
                  className={css.radio_button}
                  type="radio"
                  name="rating_six"
                  value="6"
               />
               <label htmlFor="rating_seven">7</label>
               <input
                  onChange={(e) => handleChange("rating", e.target.value)}
                  className={css.radio_button}
                  type="radio"
                  name="rating_seven"
                  value="7"
               />
               <label htmlFor="rating_eight">8</label>
               <input
                  onChange={(e) => handleChange("rating", e.target.value)}
                  className={css.radio_button}
                  type="radio"
                  name="rating_eight"
                  value="8"
               />
               <label htmlFor="rating_nine">9</label>
               <input
                  onChange={(e) => handleChange("rating", e.target.value)}
                  className={css.radio_button}
                  type="radio"
                  name="rating_nine"
                  value="9"
               />
               <label htmlFor="rating_ten">10</label>
               <input
                  onChange={(e) => handleChange("rating", e.target.value)}
                  className={css.radio_button}
                  type="radio"
                  name="rating_ten"
                  value="10"
               />
            </div>
            <div className={`${css.comments}, ${css.form_item}`}>
               <label htmlFor="comment">Comments:</label>
               <input
                  onChange={(e) => handleChange("comment", e.target.value)}
                  className={css.text_field}
                  name="comment"
               />
            </div>
            <div className={`${css.button_container} ${css.form_item}`}>
               <p onClick={() => handleClick(formData)} className={css.button}>
                  Add to Games-Logger!
               </p>
            </div>
         </form>
      </div>
   );
}
