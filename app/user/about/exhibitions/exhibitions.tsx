"use client";
export const dynamic = "auto";
import ExhibitionForm from "@/components/Forms/ExhibitionForm/ExhibitionForm";
import { Exhibition } from "@/types/exhibition";
import { useState } from "react";
import styles from "./exhibition.module.css";

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
      <span className={styles.message}>{message}</span>

      <ExhibitionForm />
      {exhibitions?.map((exhibition) => (
        <div key={exhibition._id}>
          <p>
            <i>Här är din tidigare skickade data</i>
          </p>
          <p>
            <b>Namn på utställning</b>
          </p>
          <p>{exhibition.title}</p>
          <p>
            <b>Konstnärer</b>
          </p>
          <p>{exhibition.artistNames}</p>
          <p>
            <b>Öppettider</b>
          </p>
          <p>{exhibition.dates.opening}</p>
          <p>{exhibition.dates.closing}</p>
          <p>
            <b>Utställningstext</b>
          </p>
          <p>{exhibition.exhibitionText}</p>
        </div>
      ))}
    </div>
  );
};

export default ClientSideExhibitions;
