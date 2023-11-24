import MapComponent from "@/components/Map/Map";
import styles from "./event.module.css";

// NOT FINISHED PAGE, NEEDS:
// - schema
// - types
// - getEvent functions

export default function Event() {
  return (
    <>
      <div className={styles.module}>
        <h1>EVENT</h1>
      </div>
      <div className={styles.map}>
        <MapComponent />
      </div>
    </>
  );
}
