
import Link from "next/link";
import { getVenues } from "@/sanity/sanity.utils";
import styles from "./platser.module.css";
// import Map from "@/components/Map/Map";

export default async function Venues() {
  const venues = await getVenues();

  return (
    <>
    <div className={styles.module}>
    <h1>Platser</h1>
      <ul className={styles.venueList}>
        {venues.map((venueName) => (
          <li key={venueName._id}>
            <Link href={`/platser/${venueName.slug}`}>
              {venueName.venueName}
            </Link>
            <span>{venueName.typeOf}</span> 
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}
