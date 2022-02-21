import Link from "next/link";
import LoadMonitor from "../components/LoadMonitor/loadMonitor";
import css from "../styles/LoadGame.module.css";

export default function LoadGame() {
   return (
      <div className={css.container}>
         <LoadMonitor />
      </div>
   );
}
