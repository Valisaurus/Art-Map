import Link from "next/link";
import { getExhibitions } from "@/sanity/sanity.utils";
import styles from "./exhibitions.module.css";
import Map from "@/components/Map/Map";
import Image from "next/image";

export default async function Exhibitions() {
  const exhibitions = await getExhibitions();

  return (
    <>
      <div className={styles.module}>
        <h1>Utställningar</h1>
        <ul className={styles.exhibitionList}>
          {exhibitions.map((exhibition) => (
            <li key={exhibition._id}>
              <div className={styles.exhibitionCard}>
                <div className={styles.topSection}>
                  <div className={styles.title}>
                    <Link
                      className={styles.exhibitionTitle}
                      href={`/utstallningar/${exhibition.slug}`}
                    >
                      {exhibition.title}
                    </Link>
                  </div>
                  <div className={styles.artistNames}>
                    <span>{exhibition.artistNames}</span>
                  </div>
                </div>
                <Image
                  src={exhibition.imageUrl}
                  alt={`${exhibition.title}`}
                  sizes="100%"
                  width={100}
                  height={100}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <div className={styles.topSection}>
                  <span className={styles.venueName}>
                    {exhibition.venue.venueName}
                  </span>
                  <div className={styles.dates}>
                    <span>{exhibition.dates.opening}</span>
                    <span>{exhibition.dates.closing}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mapWrapper">
        <Map />
      </div>
    </>
  );
}
