import ReturnButton from "../ReturnButton/returnButton";
import Form from "../Form/form";
import css from "./newMonitorText.module.css";

export default function NewMonitorText() {
   return (
      <div className={css.container}>
         <div className={css.return_button}>
            <ReturnButton />
         </div>
         <Form />
      </div>
   );
}
