"use client";
import VenueForm from "@/components/Forms/VenueForm/VenueForm";
import { Venue } from "@/types/venue";
import styles from "./updateVenue.module.css";

interface ClientSideUpdateVenueProps {
  venue: Venue | undefined;
  message?: string;
}

const ClientSideUpdateVenue = ({
  venue,
  message,
}: ClientSideUpdateVenueProps) => {
  return (
    <>
      <div className={styles.updateContainer}>
        <h1>Uppdatera din information</h1>
        <span className={styles.message}>{message}</span>
        <div className={styles.contentWrapper}>
          <div className={styles.formWrapper}>
            <VenueForm />
          </div>

          <div className={styles.venueData}>
            <h2 className={styles.venueDataHeading}>Din information</h2>
            <div>
              <h3>Namn på verksamheten</h3>
              <p>{venue?.venueName}</p>
            </div>
            <div>
              <h3>Hemsida</h3>
              <p>{venue?.websiteUrl}</p>
            </div>
            <div>
              <h3>Typ av verksamhet</h3>
              <p>{venue?.typeOf}</p>
            </div>
            <div>
              <h3>Address</h3>
              <p>{venue?.address.streetName}</p>
              <p>{venue?.address.streetNo}</p>
              <p>{venue?.address.zip}</p>
              <p>{venue?.address.city}</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>{venue?.contact.email}</p>
            </div>
            <div>
              <h3>Telefonnumer</h3>
              <p>{venue?.contact.phone}</p>
            </div>
            <div>
              <div>
                <h3>Öppettider</h3>
                <span className={styles.day}>måndag</span>
                <span>från {venue?.openingHours.monday?.from}</span>
                <span>till {venue?.openingHours.monday?.to}</span>
              </div>
              <div>
                <span className={styles.day}>tisdag</span>
                <span>från {venue?.openingHours.tuesday?.from}</span>
                <span>till {venue?.openingHours.tuesday?.to}</span>
              </div>
              <div>
                <span className={styles.day}>onsdag</span>
                <span>från {venue?.openingHours.wednesday?.from}</span>
                <span>till {venue?.openingHours.wednesday?.to}</span>
              </div>
              <div>
                <span className={styles.day}>torsdag</span>
                <span>från {venue?.openingHours.thursday?.from}</span>
                <span>till {venue?.openingHours.thursday?.to}</span>
              </div>
              <div>
                <span className={styles.day}>fredag</span>
                <span>från {venue?.openingHours.friday?.from}</span>
                <span>till {venue?.openingHours.friday?.to}</span>
              </div>
              <div>
                <span className={styles.day}>lördag</span>
                <span>från {venue?.openingHours.saturday?.from}</span>
                <span>till {venue?.openingHours.saturday?.to}</span>
              </div>
              <div>
                <span className={styles.day}>söndag</span>
                <span>från {venue?.openingHours.sunday?.from}</span>
                <span>till {venue?.openingHours.sunday?.to}</span>
              </div>
            </div>
            <div>
              <h3>Endast förbokade visningar?</h3>
              <p>{venue?.openingHours.openByAppointment}</p>
            </div>
            <div>
              <h3>Oregelbundna öppettider</h3>
              <p>{venue?.irregularOpeningHours}</p>
            </div>

            <div>
              <h3>Om verksamheten</h3>
              <p>{venue?.about}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientSideUpdateVenue;
