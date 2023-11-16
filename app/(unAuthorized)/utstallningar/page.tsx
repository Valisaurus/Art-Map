import Link from "next/link";
import { getExhibitions } from "@/sanity/sanity.utils";
import styles from "./exhibitions.module.css";
import Image from "next/image";
import { Exhibition } from "@/types/exhibition";
import { formatDateRange, getColor } from "@/utils/functions";

export default async function Exhibitions() {
  const exhibitions: Exhibition[] = await getExhibitions();

  return (
    <>
      <div className={styles.module}>
        <h1>Utställningar</h1>
        <ul className={styles.exhibitionList}>
          {exhibitions.map((exhibition) => (
            <li key={exhibition._id}>
              <div
                className={styles.exhibitionCard}
                style={{ backgroundColor: getColor(exhibition.typeOf.typeOf) }}
              >
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
                  className={styles.exhibitionImage}
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
                  <Link className={styles.venueName} href={""}>
                    {exhibition.venue.venueName}
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
    </>
  );
}
