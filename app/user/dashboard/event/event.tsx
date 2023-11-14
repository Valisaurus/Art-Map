"use client";

import EventForm from "@/components/Forms/EventForm/EventForm";

export default async function ClientSideEvent() {

  return (
    <>
      <div>
        Hej!
        <br />
        Här fyller du i era kommande event.
      </div>
      <EventForm />
    </>
  );
}
