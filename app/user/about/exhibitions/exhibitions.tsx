"use client";
export const dynamic = "auto";
import ExhibitionForm from "@/components/Forms/ExhibitionForm/ExhibitionForm";

export default function ClientSideExhibitions() {
  return (
    <>
      <div>
        Hej!
        <br />
        Här fyller du i era kommande utställningar.
      </div>
      <ExhibitionForm />
    </>
  );
}
