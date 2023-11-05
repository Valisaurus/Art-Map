"use client";
import { createClient } from "@sanity/client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Venue } from "@/types/venue";

const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  useCdn: false,
});

export default function Venues() {
  const [venueNames, setVenueNames] = useState<Venue[]>([]);

  useEffect(() => {
    const documentType = "venue";

    client
      .fetch<Venue[]>(
        `*[_type == "${documentType}"]{
        name,
        "slug": slug.current,
    }`
      )
      .then((fetchedName) => {
        // Handle the fetched data
        setVenueNames(fetchedName);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(venueNames);
  return (
    <>
      {" "}
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
