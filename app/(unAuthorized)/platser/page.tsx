
import Link from "next/link";
import { getVenues } from "@/sanity/sanity.utils";
import styles from "./platser.module.css";
import { Venue } from "@/types/venue";
import { getColor, getTitleFromTypeOf } from "@/utils/functions";


export default async function Venues() {
  const venues: Venue[] = await getVenues();

  return (
    <>
    <div className={styles.module}>
    <h1>Platser</h1>
      <ul className={styles.venueList}>
        {venues.map((venue) => (
          <li key={venue._id} style={{ backgroundColor: getColor(venue.typeOf) }}>
            <Link href={`/platser/${venue.slug}`}>
              {venue.venueName}
            </Link>
            <span>{getTitleFromTypeOf(venue.typeOf)}</span>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}
