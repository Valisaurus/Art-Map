"use client";
import { createClient } from "@sanity/client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Venue } from "@/types/venue";

const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-10-10",
});

export default function Venues() {
  const [venueNames, setVenueNames] = useState<Venue[]>([]);

  useEffect(() => {
    const documentType = "venue";

    client
      .fetch<Venue[]>(
        `*[_type == "${documentType}"]{
        venueName,
        "slug": slug.current,
    }`
      )
      .then((fetchedName) => {
        setVenueNames(fetchedName);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(venueNames);
  return (
    <>
      <ul>
        {venueNames.map((venueName) => (
          <li key={venueName.name}>
            <Link href={venueName.slug}>{venueName.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
