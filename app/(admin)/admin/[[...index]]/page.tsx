"use client";
import { NextStudio } from "next-sanity/studio";
import { config } from "@/sanity.config";
import InviteForm from "@/components/InviteForm/InviteForm";

export default function AdminPage() {
  return (
    <>
      <NextStudio config={config} />
      <InviteForm />
    </>
  );
}
