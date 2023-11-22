"use client";
export const dynamic = "auto";
import ExhibitionForm from "@/components/Forms/ExhibitionForm/ExhibitionForm";
import { Exhibition } from "@/types/exhibition";
import { useState } from "react";

interface ClientSideUpdateExihibitionProps {
  exhibitions: Exhibition[] | undefined;
}

const ClientSideExhibitions = ({
  exhibitions,
}: ClientSideUpdateExihibitionProps) => {
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const handleDelete = async (exhibitionId: string) => {
    try {
      const response = await fetch("/api/deleteExihibition", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ exhibitionId }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete exhibition");
      }

      // Handle success, e.g., refresh the exhibition list
      console.log("Exhibition deleted successfully");
      setDeleteError(null);
    } catch (error) {
      console.error("Error deleting exhibition:", error);
      setDeleteError("Failed to delete exhibition");
    }
  };

  return (
    <>
      <div>
        Hej!
        <br />
        Här fyller du i era kommande utställningar.
      </div>
      <ExhibitionForm />

      {exhibitions.map((exhibition) => (
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

          <form
            // action="/api/deleteExihibition"
            // method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              handleDelete(exhibition._id);
            }}
          >
            {/* Hidden input to store the exhibition ID */}
            <input type="hidden" name="exhibitionId" value={exhibition._id} />
            <button type="submit">Radera</button>
          </form>
        </div>
      ))}
      {deleteError && <p style={{ color: "red" }}>{deleteError}</p>}
    </>
  );
};

export default ClientSideExhibitions;
