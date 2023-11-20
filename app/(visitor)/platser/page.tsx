"use client";
import Link from "next/link";
import { getVenues } from "@/sanity/sanity.utils";
import styles from "./venues.module.css";
import { Venue } from "@/types/venue";
import { getColor, getTitleFromTypeOf } from "@/utils/functions";
import MapComponent from "@/components/Map/Map";

export default async function Venues() {
  const venues: Venue[] = await getVenues();

  return (
    <>
      <div className={styles.module}>
        <h1>Platser</h1>
        <ul className={styles.venueList}>
          {venues.map((venue) => (
            <li
              key={venue._id}
              style={{
                backgroundColor: getColor(venue.typeOf).original,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = getColor(
                  venue.typeOf
                ).hover;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = getColor(
                  venue.typeOf
                ).original;
              }}
            >
              <Link href={`/platser/${venue.slug}`}>{venue.venueName}</Link>
              <span>{getTitleFromTypeOf(venue.typeOf)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.map}>
        <MapComponent />
      </div>
    </>
  );
}
