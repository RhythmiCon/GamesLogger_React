import NewMonitorText from "../NewMonitorText/newMonitorText";
import css from "./newMonitor.module.css";

export default function NewMonitor() {
   return (
      <div className={css.outer}>
         <div className={css.inner}>
            <NewMonitorText />
         </div>
      </div>
   );
}
