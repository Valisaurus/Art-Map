import styles from "./ExhibitionCard.module.css";
import { getExhibition } from "@/sanity/sanity.utils";

type Props = {
  params: { ustallning: string };
};

export default async function ExhibitionCard({ params }: Props) {
  const slug = params.ustallning;
  await getExhibition(slug);
  return (
    <div className={styles.cardWrapper}>

    </div>
  );
}
