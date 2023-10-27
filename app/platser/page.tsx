"use client";
import { createClient } from "@sanity/client";
import { useEffect, useState } from "react";

const client = createClient({
  projectId: "z4x2zjsw",
  dataset: "production",
  useCdn: false,
});

type venueName = {
  name: string;
};

export default function Venues() {
  const [venueNames, setVenueNames] = useState<venueName[]>([]);

  useEffect(() => {
    const documentType = "form";

    client
      .fetch<venueName[]>(`*[_type == "${documentType}"]`)
      .then((fetchedName) => {
        // Handle the fetched data
        setVenueNames(fetchedName);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <ul>
        {venueNames.map((venueName) => (
          <li key={venueName.name}>{venueName.name}</li>
        ))}
      </ul>
    </div>
  );
}
