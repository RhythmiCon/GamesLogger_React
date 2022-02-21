import Link from "next/link";
import NewMonitor from "../components/NewMonitor/newMonitor";
import css from "../styles/NewGame.module.css";

export default function NewGame() {
   return (
      <div className={css.container}>
         <NewMonitor />
      </div>
   );
}
