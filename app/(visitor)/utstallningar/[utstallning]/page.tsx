import Messages from "@/components/Messages/Messages";
import { getExhibition } from "@/sanity/sanity.utils";
import styles from "./exhibition.module.css";
import MapComponent from "@/components/Map/Map";

type Props = {
  params: { utstallning: string };
};

export default async function Exhibition({ params }: Props) {
  const slug = params.utstallning;

  if (!slug) {
    return <Messages />;
  }
  const exhibition = await getExhibition(slug);

  return (
    <>
      <div className={styles.module}>
        <div className={styles.exhibitionWrapper}></div>
        <h1 className={styles.exhibitionTitle}>{exhibition.title}</h1>
      </div>
      <div className={styles.map}>
        <MapComponent />
      </div>
    </>
  );
}
