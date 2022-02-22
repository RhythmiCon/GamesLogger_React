import Form from "../Form/form";
import ReturnButton from "../ReturnButton/returnButton";
import css from "./loadMonitorText.module.css";

export default function LoadMonitorText() {
   return (
      <div className={css.container}>
         <div className={css.return_button}>
            <ReturnButton />
         </div>
      </div>
   );
}
