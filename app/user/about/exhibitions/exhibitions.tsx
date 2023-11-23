"use client";
export const dynamic = "auto";
import ExhibitionForm from "@/components/Forms/ExhibitionForm/ExhibitionForm";
import { Exhibition } from "@/types/exhibition";
import styles from "./exhibition.module.css";
import Image from "next/image";

interface ClientSideUpdateExihibitionProps {
  exhibitions: Exhibition[] | undefined;
  message?: string;
}

const ClientSideExhibitions = ({
  exhibitions,
  message,
}: ClientSideUpdateExihibitionProps) => {
  return (
    <div className={styles.exhibitionContainer}>
      <h1>Dina utställningar</h1>
      <div className={styles.exhibitionWrapper}>
      <div className={styles.formWrapper}>
        <ExhibitionForm />
        </div>
        {exhibitions?.map((exhibition) => (
          <div key={exhibition._id} className={styles.exhibitionData}>
            <h2 className={styles.exhibitionDataHeading}>
              Publicerade utställningar
            </h2>
            <p className={styles.message}>{message}</p>
            <div className={styles.exhibitionSection}>
              <h3>Namn på utställning</h3>
              <p>{exhibition.title}</p>
            </div>
            <div className={styles.exhibitionSection}>
              <h3>Konstnärer</h3>
              <p>{exhibition.artistNames}</p>
            </div>
            <div className={styles.exhibitionSection}>
              <h3>Bild</h3>
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
            <div className={styles.exhibitionSection}>
              <h3>Datum</h3>
              <p>{exhibition.dates.opening}</p>
              <p>{exhibition.dates.closing}</p>
            </div>
            <div className={styles.exhibitionSection}>
              <h3>Utställningstext</h3>
              <p>{exhibition.exhibitionText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSideExhibitions;
