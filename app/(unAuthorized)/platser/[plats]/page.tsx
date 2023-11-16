import { getVenue } from "@/sanity/sanity.utils";
import styles from "../platser.module.css";

type Props = {
  params: { plats: string };
};

export default async function Venue({ params }: Props) {
  const slug = params.plats;
  const venue = await getVenue(slug);

  return (
    <>
      <div className={styles.module}>
        <h1>{venue.venueName}</h1>
        <p>{venue.websiteUrl}</p>
        <p>{venue.about}</p>
        <p>{venue.typeOf}</p>

        <p>{venue.address.streetName}</p>
        <p>{venue.address.streetNo}</p>
        <p>{venue.address.zip}</p>
        <p>{venue.address.city}</p>

        <p>{venue.contact.email}</p>
        <p>{venue.contact.phone}</p>

        <p>{venue.openingHours.monday?.from}</p>
        <p>{venue.openingHours.monday?.to}</p>
        <p>{venue.openingHours.tuesday?.from}</p>
        <p>{venue.openingHours.tuesday?.to}</p>
        <p>{venue.openingHours.tuesday?.from}</p>
        <p>{venue.openingHours.wednesday?.to}</p>
        <p>{venue.openingHours.thursday?.from}</p>
        <p>{venue.openingHours.friday?.to}</p>
        <p>{venue.openingHours.saturday?.from}</p>
        <p>{venue.openingHours.sunday?.to}</p>

        <p>{venue.openingHours.openByAppointment}</p>

        <p>{venue.irregularOpeningHours}</p>

        <p>{venue.about}</p>
      </div>
    </>
  );
}
