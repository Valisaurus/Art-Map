
import Link from "next/link";
import { getVenues } from "@/sanity/sanity.utils";

export default async function Venues() {
  const venues = await getVenues();

  return (
    <>
      <ul>
        {venues.map((venueName) => (
          <li key={venueName._id}>
            <Link href={`/platser/${venueName.slug}`}>
              {venueName.venueName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
