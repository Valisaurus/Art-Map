import Messages from "@/components/Messages/Messages";
import { getExhibition } from "@/sanity/sanity.utils";
import styles from "./exhibition.module.css";
import MapComponent from "@/components/Map/Map";
import Image from "next/image";
import { getColor } from "@/utils/functions";
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
        <div
          className={styles.exhibitionWrapper}
          style={{
            backgroundColor: getColor(exhibition.typeOf).original,
          }}
        >
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
        </div>
        <h1 className={styles.exhibitionTitle}>{exhibition.title}</h1>

        <p dangerouslySetInnerHTML={{ __html: formattedText }}></p>
      </div>
      <div className={styles.map}>
        <MapComponent />
      </div>
    </>
  );
}
