import MapComponent from "@/components/Map/Map";
import styles from "./event.module.css";

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
