"use client";
import VenueForm from "@/components/Forms/VenueForm/VenueForm";
import { Venue } from "@/types/venue";
import styles from "./updateVenue.module.css";

interface ClientSideUpdateVenueProps {
  venue: Venue | undefined;
  message?: string;
}

const ClientSideUpdateVenue = ({ venue, message }: ClientSideUpdateVenueProps) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          
          <VenueForm />
        </div>
        <div className={styles.venueData}>
          <p>
            <i>Här är din tidigare skickade data</i>
          </p>
          <p>
            <b>Namn på verksamheten</b>
          </p>

          <p>{venue?.venueName}</p>
          <p>
            <b>Hemsida</b>
          </p>
          <p>{venue?.websiteUrl}</p>
          <p>
            <b>Typ av verksamhet</b>
          </p>
          <p>{venue?.typeOf}</p>
          <p>
            <b>Address</b>
          </p>
          <p>{venue?.address.streetName}</p>
          <p>{venue?.address.streetNo}</p>
          <p>{venue?.address.zip}</p>
          <p>{venue?.address.city}</p>
          <p>
            <b>Email</b>
          </p>
          <p>{venue?.contact.email}</p>
          <p>
            <b>Telefonnumer</b>
          </p>
          <p>{venue?.contact.phone}</p>

          <p>
            <b>Öppettider</b>
          </p>
          <p>{venue?.openingHours.monday?.from}</p>
          <p>{venue?.openingHours.monday?.to}</p>
          <p>{venue?.openingHours.tuesday?.from}</p>
          <p>{venue?.openingHours.tuesday?.to}</p>
          <p>{venue?.openingHours.tuesday?.from}</p>
          <p>{venue?.openingHours.wednesday?.to}</p>
          <p>{venue?.openingHours.thursday?.from}</p>
          <p>{venue?.openingHours.friday?.to}</p>
          <p>{venue?.openingHours.saturday?.from}</p>
          <p>{venue?.openingHours.sunday?.to}</p>

          <p>{venue?.openingHours.openByAppointment}</p>

          <p>{venue?.irregularOpeningHours}</p>
          <p>
            <b>Om verksamheten</b>
          </p>
          <p>{venue?.about}</p>
        </div>
      </div>
    </>
  );
};

export default ClientSideUpdateVenue;
