import Link from "next/link";
import css from "./returnButton.module.css";

export default function ReturnButton() {
   return (
      <div className={css.return_button}>
         <Link href="/">
            <a>←</a>
         </Link>
      </div>
   );
}
