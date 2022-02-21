import Link from "next/link";
import css from "./monitorText.module.css";

export default function MonitorText() {
   return (
      <>
         <div className={css.title_container}>
            <h1>GAMES-LOGGER</h1>
         </div>
         <div className={css.button_container}>
            <Link href="/newGame">
               <a>New Game</a>
            </Link>
            <Link href="/loadGame">
               <a>Load Game</a>
            </Link>
         </div>
         <div className={css.icon_container}>
            <img
               className={css.icon}
               src="https://freesvg.org/img/invader.png"
               alt="space invader"
            />
         </div>
      </>
   );
}
