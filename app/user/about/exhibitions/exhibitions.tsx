"use client";
export const dynamic = "auto";
import ExhibitionForm from "@/components/Forms/ExhibitionForm/ExhibitionForm";
import { Exhibition } from "@/types/exhibition";

interface ClientSideUpdateExihibitionProps {
  exhibitions: Exhibition[];
}
const ClientSideExhibitions = ({
  exhibitions,
}: ClientSideUpdateExihibitionProps) => {
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
            <b>Namn på verksamheten</b>
          </p>

          <p>{exhibition.title}</p>
          <p>
            <b>Hemsida</b>
          </p>
          <p>{exhibition.artistNames}</p>
          <p>
            <b>Typ av verksamhet</b>
          </p>
          <p>{exhibition.openingDate}</p>
          <p>
            <b>Address</b>
          </p>
          <p>{exhibition.dates.opening}</p>
          <p>{exhibition.dates.closing}</p>
          <p>{exhibition.exhibitionText}</p>
          <p>{exhibition.typeOf}</p>
        </div>
      ))}
    </>
  );
};
export default ClientSideExhibitions;
