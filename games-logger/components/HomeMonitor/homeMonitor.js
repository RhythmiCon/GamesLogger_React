import MonitorText from "../MonitorText/monitorText";
import css from "./monitor.module.css";

export default function Monitor() {
   return (
      <div className={css.outer}>
         <div className={css.inner}>
            <MonitorText />
         </div>
      </div>
   );
}
