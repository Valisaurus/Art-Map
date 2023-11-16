
import Link from "next/link";
import { getVenues } from "@/sanity/sanity.utils";
import styles from "./platser.module.css";
import { Venue } from "@/types/venue";
import { getTitleFromTypeOf } from "@/utils/functions";


export default async function Venues() {
  const venues: Venue[] = await getVenues();

    // Function to determine the color based on typeOf
    const getColor = (typeOf: string): string => {
      switch (typeOf) {
        case "gallery":
          return "rgba(255, 164, 28, 0.3)"; 
        case "artistRun":
          return "rgba(91, 114, 233, 0.3)"; 
        case "museum":
          return "rgba(218, 95, 95, 0.30)"; 
        case "institution":
          return "rgba(106, 157, 139, 0.3)"; 
        case "popUp":
          return "rgba(115, 247, 255, 0.30)"; 
        default:
          return "rgba(255, 214, 0, 0.30)"; // Default color if typeOf doesn't match any case
      }
    };
  

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
