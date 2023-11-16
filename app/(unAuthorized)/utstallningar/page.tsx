import Link from "next/link";
import { getExhibitions } from "@/sanity/sanity.utils";
import styles from "./exhibitions.module.css";
import Image from "next/image";
import { Exhibition } from "@/types/exhibition";

export default async function Exhibitions() {
  const exhibitions: Exhibition[] = await getExhibitions();

  // Function to determine the color based on typeOf
  const getColor = (typeOf: string): string => {
    switch (typeOf) {
      case "gallery":
        return "rgba(255, 164, 28, 0.3)"; 
      case "artistRun":
        return "rgba(91, 114, 233, 0.3)"; 
      case "museum":
        return "rgba(218, 95, 95, 0.30);"; 
      case "institution":
        return "rgba(106, 157, 139, 0.3)"; 
      case "popUp":
        return "rgba(115, 247, 255, 0.30)"; 
      default:
        return "rgba(255, 214, 0, 0.30)"; // Default color if typeOf doesn't match any case
    }
  };
  const getMarkerColor = (typeOf: string): string => {
    switch (typeOf) {
      case "gallery":
        return "/images/map/orangeMarker.svg"; 
      case "artistRun":
        return "/images/map/purpleMarker.svg"; 
      case "museum":
        return "/images/map/redMarker.svg"; 
      case "institution":
        return "/images/map/greenMarker.svg"; 
      case "popUp":
        return "/images/map/turquoiseMarker.svg"; 
      default:
        return "/images/map/yellowMarker.svg"; // Default color if typeOf doesn't match any case
    }
  };

  return (
    <>
      <div className={styles.module}>
        <h1>Utställningar</h1>
        <ul className={styles.exhibitionList}>
          {exhibitions.map((exhibition) => (
            
            <li key={exhibition._id}>
              <div className={styles.exhibitionCard} style={{ backgroundColor: getColor(exhibition.typeOf.typeOf) }}>
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
    </>
  );
}
