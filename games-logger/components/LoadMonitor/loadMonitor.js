import LoadMonitorText from "../LoadMonitorText/loadMonitorText";
import css from "./loadMonitor.module.css";

export default function LoadMonitor() {
   return (
      <div className={css.outer}>
         <div className={css.inner}>
            <LoadMonitorText />
         </div>
      </div>
   );
}
