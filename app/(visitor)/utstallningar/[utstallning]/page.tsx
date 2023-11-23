import Messages from "@/components/Messages/Messages";
import { getExhibition, getVenues } from "@/sanity/sanity.utils";
import styles from "./exhibition.module.css";
import Image from "next/image";
import { getColor, formatDateRange } from "@/utils/functions";
import Back from "@/components/NavigationButtons/GoBackButton/GoBackButton";
import Link from "next/link";
import ExitButton from "@/components/NavigationButtons/ExitButton/ExitButton";

type Props = {
  params: { utstallning: string };
};

export default async function Exhibition({ params }: Props) {
  const slug = params.utstallning;

  if (!slug) {
    return <Messages />;
  }
  const exhibition = await getExhibition(slug);

  const formattedText = exhibition.exhibitionText.replace(/\n/g, "<br>");

  return (
    <>
      <div className={styles.module}>
        <div className={styles.navigation}>
          <Link className={styles.back} href="/utstallningar">
            <Back /> <span>tillbaka till utställningar</span>
          </Link>
          <Link href="/">
            <ExitButton />
          </Link>
        </div>
        <div
          className={styles.exhibitionCard}
          style={{
            backgroundColor: getColor(exhibition.typeOf).original,
          }}
        >
          <div className={styles.topSection}>
            <h1 className={styles.exhibitionTitle}>{exhibition.title}</h1>
            <span className={styles.artistNames}>{exhibition.artistNames}</span>
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
          <div className={styles.bottomSection}>
            <Link className={styles.venueName} href={`/platser/${exhibition.venueSlug}`}>
              {exhibition.venue}
            </Link>
            <span className={styles.dates} >
              {formatDateRange(
                exhibition.dates.opening,
                exhibition.dates.closing
              )}
            </span>
          </div>
        </div>

        <p className={styles.exhibitionText} dangerouslySetInnerHTML={{ __html: formattedText }}></p>
      </div>
    </>
  );
}
