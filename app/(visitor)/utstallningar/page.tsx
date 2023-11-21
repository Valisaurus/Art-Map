"use client";
import Link from "next/link";
import { getExhibitions } from "@/sanity/sanity.utils";
import styles from "./exhibitions.module.css";
import Image from "next/image";
import { Exhibition } from "@/types/exhibition";
import { formatDateRange, getColor } from "@/utils/functions";
import MapComponent from "@/components/Map/Map";
import ExitButton from "@/components/NavigationButtons/ExitButton/ExitButton";

export default async function Exhibitions() {
  const exhibitions: Exhibition[] = await getExhibitions();

  return (
    <>
      <div className={styles.module}>
        <div className={styles.navigation}>
          <h1>Utställningar</h1>
          <Link href="/">
            <ExitButton />
          </Link>
        </div>
        <ul className={styles.exhibitionList}>
          {exhibitions.map((exhibition) => (
            <li key={exhibition._id}>
              <div
                className={styles.exhibitionCard}
                id={exhibition.venue}
                style={{
                  backgroundColor: getColor(exhibition.typeOf).original,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = getColor(
                    exhibition.typeOf
                  ).hover;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = getColor(
                    exhibition.typeOf
                  ).original;
                }}
              >
                <div className={styles.topSection}>
                  <div className="exhibitionTitle">
                    <Link
                      className={styles.exhibitionTitle}
                      href={`/utstallningar/${exhibition.slug}`}
                    >
                      <div className={styles.title}>{exhibition.title}</div>
                    </Link>
                  </div>
                  <div className={styles.artistNames}>
                    <span>{exhibition.artistNames}</span>
                  </div>
                </div>

                <Image
                  className={`exhibitionImage ${styles.exhibitionImage}`}
                  id={exhibition.venue}
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

                <div className={styles.bottomSection}>
                  <Link
                    className={styles.venueName}
                    href={`/platser/${exhibition.venueSlug}`}
                  >
                    {exhibition.venue}
                  </Link>
                  <div className={styles.dates}>
                    <span>
                      {formatDateRange(
                        exhibition.dates.opening,
                        exhibition.dates.closing
                      )}
                    </span>
                  </div>
                </div>
              </div>
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
